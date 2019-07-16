'use strict';

/**
 * Streetspeedlimits.js controller
 *
 * @description: A set of functions called "actions" for managing `Streetspeedlimits`.
 */

module.exports = {

  /**
   * Retrieve streetspeedlimits records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.streetspeedlimits.search(ctx.query);
    } else {
      return strapi.services.streetspeedlimits.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a streetspeedlimits record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.streetspeedlimits.fetch(ctx.params);
  },

  /**
   * Count streetspeedlimits records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.streetspeedlimits.count(ctx.query);
  },

  /**
   * Create a/an streetspeedlimits record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.streetspeedlimits.add(ctx.request.body);
  },

  /**
   * Update a/an streetspeedlimits record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.streetspeedlimits.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an streetspeedlimits record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.streetspeedlimits.remove(ctx.params);
  }
};
