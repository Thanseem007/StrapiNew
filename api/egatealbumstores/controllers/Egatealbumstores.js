'use strict';

/**
 * Egatealbumstores.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatealbumstores`.
 */

module.exports = {

  /**
   * Retrieve egatealbumstores records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatealbumstores.search(ctx.query);
    } else {
      return strapi.services.egatealbumstores.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatealbumstores record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatealbumstores.fetch(ctx.params);
  },

  /**
   * Count egatealbumstores records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatealbumstores.count(ctx.query);
  },

  /**
   * Create a/an egatealbumstores record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatealbumstores.add(ctx.request.body);
  },

  /**
   * Update a/an egatealbumstores record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatealbumstores.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatealbumstores record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatealbumstores.remove(ctx.params);
  }
};
