'use strict';

/**
 * Hospitals.js controller
 *
 * @description: A set of functions called "actions" for managing `Hospitals`.
 */

module.exports = {

  /**
   * Retrieve hospitals records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hospitals.search(ctx.query);
    } else {
      return strapi.services.hospitals.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hospitals record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hospitals.fetch(ctx.params);
  },

  /**
   * Count hospitals records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hospitals.count(ctx.query);
  },

  /**
   * Create a/an hospitals record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hospitals.add(ctx.request.body);
  },

  /**
   * Update a/an hospitals record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hospitals.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hospitals record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hospitals.remove(ctx.params);
  }
};
