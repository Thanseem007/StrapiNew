'use strict';

/**
 * Policedepartment.js controller
 *
 * @description: A set of functions called "actions" for managing `Policedepartment`.
 */

module.exports = {

  /**
   * Retrieve policedepartment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.policedepartment.search(ctx.query);
    } else {
      return strapi.services.policedepartment.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a policedepartment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.policedepartment.fetch(ctx.params);
  },

  /**
   * Count policedepartment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.policedepartment.count(ctx.query);
  },

  /**
   * Create a/an policedepartment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.policedepartment.add(ctx.request.body);
  },

  /**
   * Update a/an policedepartment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.policedepartment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an policedepartment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.policedepartment.remove(ctx.params);
  }
};
