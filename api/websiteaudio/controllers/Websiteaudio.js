'use strict';

/**
 * Websiteaudio.js controller
 *
 * @description: A set of functions called "actions" for managing `Websiteaudio`.
 */

module.exports = {

  /**
   * Retrieve websiteaudio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websiteaudio.search(ctx.query);
    } else {
      return strapi.services.websiteaudio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websiteaudio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websiteaudio.fetch(ctx.params);
  },

  /**
   * Count websiteaudio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websiteaudio.count(ctx.query);
  },

  /**
   * Create a/an websiteaudio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websiteaudio.add(ctx.request.body);
  },

  /**
   * Update a/an websiteaudio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websiteaudio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websiteaudio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websiteaudio.remove(ctx.params);
  }
};
