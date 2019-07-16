'use strict';

/**
 * Urlforquicklinks.js controller
 *
 * @description: A set of functions called "actions" for managing `Urlforquicklinks`.
 */

module.exports = {

  /**
   * Retrieve urlforquicklinks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.urlforquicklinks.search(ctx.query);
    } else {
      return strapi.services.urlforquicklinks.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a urlforquicklinks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.urlforquicklinks.fetch(ctx.params);
  },

  /**
   * Count urlforquicklinks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.urlforquicklinks.count(ctx.query);
  },

  /**
   * Create a/an urlforquicklinks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.urlforquicklinks.add(ctx.request.body);
  },

  /**
   * Update a/an urlforquicklinks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.urlforquicklinks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an urlforquicklinks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.urlforquicklinks.remove(ctx.params);
  }
};
