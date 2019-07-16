'use strict';

/**
 * Egatedepartmentnews.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatedepartmentnews`.
 */

module.exports = {

  /**
   * Retrieve egatedepartmentnews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatedepartmentnews.search(ctx.query);
    } else {
      return strapi.services.egatedepartmentnews.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatedepartmentnews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatedepartmentnews.fetch(ctx.params);
  },

  /**
   * Count egatedepartmentnews records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatedepartmentnews.count(ctx.query);
  },

  /**
   * Create a/an egatedepartmentnews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatedepartmentnews.add(ctx.request.body);
  },

  /**
   * Update a/an egatedepartmentnews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatedepartmentnews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatedepartmentnews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatedepartmentnews.remove(ctx.params);
  }
};
