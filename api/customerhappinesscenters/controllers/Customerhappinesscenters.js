'use strict';

/**
 * Customerhappinesscenters.js controller
 *
 * @description: A set of functions called "actions" for managing `Customerhappinesscenters`.
 */

module.exports = {

  /**
   * Retrieve customerhappinesscenters records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.customerhappinesscenters.search(ctx.query);
    } else {
      return strapi.services.customerhappinesscenters.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a customerhappinesscenters record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.customerhappinesscenters.fetch(ctx.params);
  },

  /**
   * Count customerhappinesscenters records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.customerhappinesscenters.count(ctx.query);
  },

  /**
   * Create a/an customerhappinesscenters record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.customerhappinesscenters.add(ctx.request.body);
  },

  /**
   * Update a/an customerhappinesscenters record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.customerhappinesscenters.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an customerhappinesscenters record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.customerhappinesscenters.remove(ctx.params);
  }
};
