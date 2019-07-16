'use strict';

/**
 * Upload.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const fs = require('fs');
const crypto = require('crypto');
const _ = require('lodash');
const toArray = require('stream-to-array');
const uuid = require('uuid/v4');
const networkDrive =require('windows-network-drive');
const path = require("path");
const moveFile = require('move-file'); 
const cdnUsername="spsa";
const cdnPassword="Pits@123";
const cdnPath="\\\\10.10.100.77\\cdn";
const cdnUrl="http://static.cdn.pitsolutions.com/StrapiMedia/uploads/";


function niceHash(buffer) {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\//g, '-')
    .replace(/\+/, '_');
}

module.exports = {
  bufferize: async files => {
    if (_.isEmpty(files) === 0) {
      throw 'Missing files.';
    }

    // files is always an array to map on
    files = _.isArray(files) ? files : [files];

    // transform all files in buffer
    return Promise.all(
      files.map(async stream => {
        const parts = await toArray(fs.createReadStream(stream.path));
        const buffers = parts.map(
          part => (_.isBuffer(part) ? part : Buffer.from(part)),
        );

        const buffer = Buffer.concat(buffers);

        return {
          tmpPath: stream.path,
          name: stream.name,
          sha256: niceHash(buffer),
          hash: uuid().replace(/-/g, ''),
          ext:
            stream.name.split('.').length > 1
              ? `.${_.last(stream.name.split('.'))}`
              : '',
          buffer,
          mime: stream.type,
          size: (stream.size / 1000).toFixed(2),
        };
      }),
    );
  },

  upload: async (files, config) => {
    // Get upload provider settings to configure the provider to use.
    const provider = _.find(strapi.plugins.upload.config.providers, {
      provider: config.provider,
    });

    if (!provider) {
      throw new Error(
        `The provider package isn't installed. Please run \`npm install strapi-provider-upload-${
          config.provider
        }\``,
      );
    }

    const actions = provider.init(config);

    // Execute upload function of the provider for all files.
    return Promise.all(
      files.map(async file => {
        await actions.upload(file);

        // Remove buffer to don't save it.
        delete file.buffer;

        file.provider = provider.provider;

        const res = await strapi.plugins['upload'].services.upload.add(file);

        // Remove temp file
        fs.unlinkSync(file.tmpPath);
        return res;
      }),
    );
  },

  add: async values => {
    // Use Content Manager business logic to handle relation.
    if (strapi.plugins['content-manager']) {
      return await strapi.plugins['content-manager'].services[
        'contentmanager'
      ].add(
        {
          model: 'file',
        },
        values,
        'upload',
      );
    }

    return strapi.query('file', 'upload').create(values);
  },

  edit: async (params, values) => {
    // Use Content Manager business logic to handle relation.
    if (strapi.plugins['content-manager']) {
      params.model = 'file';
      params.id = params._id || params.id;

      return await strapi.plugins['content-manager'].services[
        'contentmanager'
      ].edit(params, values, 'upload');
    }

    return strapi.query('file', 'upload').update(_.assign(params, values));
  },

  fetch: params => {
    params.id = params._id || params.id;
    return strapi
      .query('file', 'upload')
      .findOne(_.pick(params, ['id']));
  },

  fetchAll: params => {
    return strapi
      .query('file', 'upload')
      .find(strapi.utils.models.convertParams('file', params));
  },

  count: async () => {
    return await strapi.query('file', 'upload').count();
  },

  remove: async (params, config) => {
    params.id = params._id || params.id;

    const file = await strapi.plugins['upload'].services.upload.fetch(params);

    // get upload provider settings to configure the provider to use
    const provider = _.cloneDeep(
      _.find(strapi.plugins.upload.config.providers, {
        provider: config.provider,
      }),
    );
    _.assign(provider, config);
    const actions = provider.init(config);

    // execute delete function of the provider
    if (file.provider === provider.provider) {
      await actions.delete(file);
    }

    // Use Content Manager business logic to handle relation.
    if (strapi.plugins['content-manager']) {
      params.model = 'file';

      await strapi.plugins['content-manager'].services['contentmanager'].delete(
        params,
        { source: 'upload' },
      );
    }

    return strapi.query('file', 'upload').delete(params);
  },

  uploadToEntity: async function(params, files, source) {
    // Retrieve provider settings from database.
    const config = await strapi
      .store({
        environment: strapi.config.environment,
        type: 'plugin',
        name: 'upload',
      })
      .get({ key: 'provider' });

    const model =
      source && source !== 'content-manager'
        ? strapi.plugins[source].models[params.model]
        : strapi.models[params.model];

    // Asynchronous upload.
    await Promise.all(
      Object.keys(files).map(async attribute => {
        // Bufferize files per attribute.
        const buffers = await this.bufferize(files[attribute]);
        const enhancedFiles = buffers.map(file => {
          const details = model.attributes[attribute];

          // Add related information to be able to make
          // the relationships later.
          file[details.via] = [
            {
              refId: params.id,
              ref: params.model,
              source,
              field: attribute,
            },
          ];

          return file;
        });

        // Make upload async.
        return this.uploadCDN(enhancedFiles, config);
      }),
    );
  },
uploadCDN: async (files, config) => {
    const provider = _.find(strapi.plugins.upload.config.providers, {
      provider: config.provider,
    });
    ////~~~~~////
    Promise.resolve()
	/**
	 * Check if the drive is already mounted. Mount it if it is not.
	 */
	.then(() =>
	{
		return networkDrive.find(cdnPath);
	})
	.then((driveLetters) =>
	{
		if (0 < driveLetters.length)
		{
			console.log("The drive is already mounted. Returning the first drive (" + driveLetters[0] + ") letter because they all point to the same place.");
			return driveLetters[0];
		}
		else
		{
			console.log("The path is not mounted. Mount the path");
			return networkDrive.mount(cdnPath, undefined, cdnUsername,cdnPassword);
		}
	})

	/**
	 * Write the file to the network drive
	 */
	.then((driveLetter) =>
	{
		let filePath;
    filePath = path.join(driveLetter + ":/", "StrapiMedia/uploads/"+files[0].hash+files[0].ext);
    let tempath=files.tmpPath;
    (async () => {
    await moveFile(files[0].tmpPath, filePath);
    fs.unlink(files[0].tmpPath,function(){});
   //  fs.unlink(files[0].tmpPath);
    console.log('The file has been moved');
    networkDrive.unmount(driveLetter);
  })();
  })
 
	.catch((err) =>
	{
		console.error(err);
		return;
	});
    if (!provider) {
      throw new Error(
        `The provider package isn't installed. Please run \`npm install strapi-provider-upload-${
          config.provider
        }\``,
      );
    }
   // const actions = provider.init(config);
    // Execute upload function of the provider for all files.
    return Promise.all(
      files.map(async file => {
        // Remove buffer to don't save it.
        await  delete file.buffer;
        const files= Object.assign(file, {
        url: cdnUrl+file.hash+file.ext 
          });
        file.provider = provider.provider;
        const res = await strapi.plugins['upload'].services.upload.add(files);
        // Remove temp file
     // fs.unlink(file.tmpPath,function(){});
        return res;
      }),
    );
  }
};