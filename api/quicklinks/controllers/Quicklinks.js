'use strict';

/**
 * Quicklinks.js controller
 *
 * @description: A set of functions called "actions" for managing `Quicklinks`.
 */

module.exports = {

  /**
   * Retrieve quicklinks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.quicklinks.search(ctx.query);
    } else {
      return strapi.services.quicklinks.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a quicklinks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.quicklinks.fetch(ctx.params);
  },

  /**
   * Count quicklinks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.quicklinks.count(ctx.query);
  },

  /**
   * Create a/an quicklinks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.quicklinks.add(ctx.request.body);
  },

  /**
   * Update a/an quicklinks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.quicklinks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an quicklinks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.quicklinks.remove(ctx.params);
  }
};
