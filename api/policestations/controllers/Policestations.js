'use strict';

/**
 * Policestations.js controller
 *
 * @description: A set of functions called "actions" for managing `Policestations`.
 */

module.exports = {

  /**
   * Retrieve policestations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.policestations.search(ctx.query);
    } else {
      return strapi.services.policestations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a policestations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.policestations.fetch(ctx.params);
  },

  /**
   * Count policestations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.policestations.count(ctx.query);
  },

  /**
   * Create a/an policestations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.policestations.add(ctx.request.body);
  },

  /**
   * Update a/an policestations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.policestations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an policestations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.policestations.remove(ctx.params);
  }
};
