'use strict';

/**
 * Websitepolicenewscategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Websitepolicenewscategory`.
 */

module.exports = {

  /**
   * Retrieve websitepolicenewscategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websitepolicenewscategory.search(ctx.query);
    } else {
      return strapi.services.websitepolicenewscategory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websitepolicenewscategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websitepolicenewscategory.fetch(ctx.params);
  },

  /**
   * Count websitepolicenewscategory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websitepolicenewscategory.count(ctx.query);
  },

  /**
   * Create a/an websitepolicenewscategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websitepolicenewscategory.add(ctx.request.body);
  },

  /**
   * Update a/an websitepolicenewscategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websitepolicenewscategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websitepolicenewscategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websitepolicenewscategory.remove(ctx.params);
  }
};
