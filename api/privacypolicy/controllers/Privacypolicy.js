'use strict';

/**
 * Privacypolicy.js controller
 *
 * @description: A set of functions called "actions" for managing `Privacypolicy`.
 */

module.exports = {

  /**
   * Retrieve privacypolicy records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.privacypolicy.search(ctx.query);
    } else {
      return strapi.services.privacypolicy.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a privacypolicy record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.privacypolicy.fetch(ctx.params);
  },

  /**
   * Count privacypolicy records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.privacypolicy.count(ctx.query);
  },

  /**
   * Create a/an privacypolicy record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.privacypolicy.add(ctx.request.body);
  },

  /**
   * Update a/an privacypolicy record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.privacypolicy.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an privacypolicy record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.privacypolicy.remove(ctx.params);
  }
};
