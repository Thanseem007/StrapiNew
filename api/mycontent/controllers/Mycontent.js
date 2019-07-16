'use strict';

/**
 * Mycontent.js controller
 *
 * @description: A set of functions called "actions" for managing `Mycontent`.
 */

module.exports = {

  /**
   * Retrieve mycontent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mycontent.search(ctx.query);
    } else {
      return strapi.services.mycontent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mycontent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mycontent.fetch(ctx.params);
  },

  /**
   * Count mycontent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mycontent.count(ctx.query);
  },

  /**
   * Create a/an mycontent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mycontent.add(ctx.request.body);
  },

  /**
   * Update a/an mycontent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mycontent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mycontent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mycontent.remove(ctx.params);
  }
};
