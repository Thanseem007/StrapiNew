'use strict';

/**
 * Sharjahnews.js controller
 *
 * @description: A set of functions called "actions" for managing `Sharjahnews`.
 */

module.exports = {

  /**
   * Retrieve sharjahnews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sharjahnews.search(ctx.query);
    } else {
      return strapi.services.sharjahnews.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sharjahnews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sharjahnews.fetch(ctx.params);
  },

  /**
   * Count sharjahnews records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sharjahnews.count(ctx.query);
  },

  /**
   * Create a/an sharjahnews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sharjahnews.add(ctx.request.body);
  },

  /**
   * Update a/an sharjahnews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sharjahnews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sharjahnews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sharjahnews.remove(ctx.params);
  }
};
