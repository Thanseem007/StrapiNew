'use strict';

/**
 * Albumstores.js controller
 *
 * @description: A set of functions called "actions" for managing `Albumstores`.
 */

module.exports = {

  /**
   * Retrieve albumstores records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.albumstores.search(ctx.query);
    } else {
      return strapi.services.albumstores.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a albumstores record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.albumstores.fetch(ctx.params);
  },

  /**
   * Count albumstores records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.albumstores.count(ctx.query);
  },

  /**
   * Create a/an albumstores record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.albumstores.add(ctx.request.body);
  },

  /**
   * Update a/an albumstores record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.albumstores.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an albumstores record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.albumstores.remove(ctx.params);
  }
};
