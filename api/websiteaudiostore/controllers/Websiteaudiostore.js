'use strict';

/**
 * Websiteaudiostore.js controller
 *
 * @description: A set of functions called "actions" for managing `Websiteaudiostore`.
 */

module.exports = {

  /**
   * Retrieve websiteaudiostore records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websiteaudiostore.search(ctx.query);
    } else {
      return strapi.services.websiteaudiostore.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websiteaudiostore record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websiteaudiostore.fetch(ctx.params);
  },

  /**
   * Count websiteaudiostore records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websiteaudiostore.count(ctx.query);
  },

  /**
   * Create a/an websiteaudiostore record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websiteaudiostore.add(ctx.request.body);
  },

  /**
   * Update a/an websiteaudiostore record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websiteaudiostore.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websiteaudiostore record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websiteaudiostore.remove(ctx.params);
  }
};
