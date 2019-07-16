'use strict';

/**
 * Trafficstations.js controller
 *
 * @description: A set of functions called "actions" for managing `Trafficstations`.
 */

module.exports = {

  /**
   * Retrieve trafficstations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.trafficstations.search(ctx.query);
    } else {
      return strapi.services.trafficstations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a trafficstations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.trafficstations.fetch(ctx.params);
  },

  /**
   * Count trafficstations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.trafficstations.count(ctx.query);
  },

  /**
   * Create a/an trafficstations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.trafficstations.add(ctx.request.body);
  },

  /**
   * Update a/an trafficstations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.trafficstations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an trafficstations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.trafficstations.remove(ctx.params);
  }
};
