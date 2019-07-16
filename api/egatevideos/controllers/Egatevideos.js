'use strict';

/**
 * Egatevideos.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatevideos`.
 */

module.exports = {

  /**
   * Retrieve egatevideos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatevideos.search(ctx.query);
    } else {
      return strapi.services.egatevideos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatevideos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatevideos.fetch(ctx.params);
  },

  /**
   * Count egatevideos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatevideos.count(ctx.query);
  },

  /**
   * Create a/an egatevideos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatevideos.add(ctx.request.body);
  },

  /**
   * Update a/an egatevideos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatevideos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatevideos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatevideos.remove(ctx.params);
  }
};
