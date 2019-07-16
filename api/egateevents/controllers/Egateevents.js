'use strict';

/**
 * Egateevents.js controller
 *
 * @description: A set of functions called "actions" for managing `Egateevents`.
 */

module.exports = {

  /**
   * Retrieve egateevents records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egateevents.search(ctx.query);
    } else {
      return strapi.services.egateevents.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egateevents record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egateevents.fetch(ctx.params);
  },

  /**
   * Count egateevents records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egateevents.count(ctx.query);
  },

  /**
   * Create a/an egateevents record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egateevents.add(ctx.request.body);
  },

  /**
   * Update a/an egateevents record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egateevents.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egateevents record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egateevents.remove(ctx.params);
  }
};
