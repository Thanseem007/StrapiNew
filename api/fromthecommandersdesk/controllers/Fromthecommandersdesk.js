'use strict';

/**
 * Fromthecommandersdesk.js controller
 *
 * @description: A set of functions called "actions" for managing `Fromthecommandersdesk`.
 */

module.exports = {

  /**
   * Retrieve fromthecommandersdesk records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.fromthecommandersdesk.search(ctx.query);
    } else {
      return strapi.services.fromthecommandersdesk.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a fromthecommandersdesk record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.fromthecommandersdesk.fetch(ctx.params);
  },

  /**
   * Count fromthecommandersdesk records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.fromthecommandersdesk.count(ctx.query);
  },

  /**
   * Create a/an fromthecommandersdesk record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.fromthecommandersdesk.add(ctx.request.body);
  },

  /**
   * Update a/an fromthecommandersdesk record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.fromthecommandersdesk.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an fromthecommandersdesk record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.fromthecommandersdesk.remove(ctx.params);
  }
};
