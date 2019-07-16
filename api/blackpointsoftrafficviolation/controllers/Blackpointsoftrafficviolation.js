'use strict';

/**
 * Blackpointsoftrafficviolation.js controller
 *
 * @description: A set of functions called "actions" for managing `Blackpointsoftrafficviolation`.
 */

module.exports = {

  /**
   * Retrieve blackpointsoftrafficviolation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blackpointsoftrafficviolation.search(ctx.query);
    } else {
      return strapi.services.blackpointsoftrafficviolation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blackpointsoftrafficviolation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blackpointsoftrafficviolation.fetch(ctx.params);
  },

  /**
   * Count blackpointsoftrafficviolation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blackpointsoftrafficviolation.count(ctx.query);
  },

  /**
   * Create a/an blackpointsoftrafficviolation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blackpointsoftrafficviolation.add(ctx.request.body);
  },

  /**
   * Update a/an blackpointsoftrafficviolation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blackpointsoftrafficviolation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blackpointsoftrafficviolation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blackpointsoftrafficviolation.remove(ctx.params);
  }
};
