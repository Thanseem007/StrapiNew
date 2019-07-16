'use strict';

/**
 * Publicationcategories.js controller
 *
 * @description: A set of functions called "actions" for managing `Publicationcategories`.
 */

module.exports = {

  /**
   * Retrieve publicationcategories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.publicationcategories.search(ctx.query);
    } else {
      return strapi.services.publicationcategories.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a publicationcategories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.publicationcategories.fetch(ctx.params);
  },

  /**
   * Count publicationcategories records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.publicationcategories.count(ctx.query);
  },

  /**
   * Create a/an publicationcategories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.publicationcategories.add(ctx.request.body);
  },

  /**
   * Update a/an publicationcategories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.publicationcategories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an publicationcategories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.publicationcategories.remove(ctx.params);
  }
};
