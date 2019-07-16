'use strict';

/**
 * Telephonedirectory.js controller
 *
 * @description: A set of functions called "actions" for managing `Telephonedirectory`.
 */

module.exports = {

  /**
   * Retrieve telephonedirectory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.telephonedirectory.search(ctx.query);
    } else {
      return strapi.services.telephonedirectory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a telephonedirectory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.telephonedirectory.fetch(ctx.params);
  },

  /**
   * Count telephonedirectory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.telephonedirectory.count(ctx.query);
  },

  /**
   * Create a/an telephonedirectory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.telephonedirectory.add(ctx.request.body);
  },

  /**
   * Update a/an telephonedirectory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.telephonedirectory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an telephonedirectory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.telephonedirectory.remove(ctx.params);
  }
};
