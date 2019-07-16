'use strict';

/**
 * Termsandconditions.js controller
 *
 * @description: A set of functions called "actions" for managing `Termsandconditions`.
 */

module.exports = {

  /**
   * Retrieve termsandconditions records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.termsandconditions.search(ctx.query);
    } else {
      return strapi.services.termsandconditions.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a termsandconditions record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.termsandconditions.fetch(ctx.params);
  },

  /**
   * Count termsandconditions records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.termsandconditions.count(ctx.query);
  },

  /**
   * Create a/an termsandconditions record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.termsandconditions.add(ctx.request.body);
  },

  /**
   * Update a/an termsandconditions record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.termsandconditions.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an termsandconditions record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.termsandconditions.remove(ctx.params);
  }
};
