'use strict';

/**
 * Flashnews.js controller
 *
 * @description: A set of functions called "actions" for managing `Flashnews`.
 */

module.exports = {

  /**
   * Retrieve flashnews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.flashnews.search(ctx.query);
    } else {
      return strapi.services.flashnews.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a flashnews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.flashnews.fetch(ctx.params);
  },

  /**
   * Count flashnews records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.flashnews.count(ctx.query);
  },

  /**
   * Create a/an flashnews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.flashnews.add(ctx.request.body);
  },

  /**
   * Update a/an flashnews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.flashnews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an flashnews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.flashnews.remove(ctx.params);
  }
};
