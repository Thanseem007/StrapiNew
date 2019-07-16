'use strict';

/**
 * Othercentre.js controller
 *
 * @description: A set of functions called "actions" for managing `Othercentre`.
 */

module.exports = {

  /**
   * Retrieve othercentre records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.othercentre.search(ctx.query);
    } else {
      return strapi.services.othercentre.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a othercentre record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.othercentre.fetch(ctx.params);
  },

  /**
   * Count othercentre records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.othercentre.count(ctx.query);
  },

  /**
   * Create a/an othercentre record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.othercentre.add(ctx.request.body);
  },

  /**
   * Update a/an othercentre record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.othercentre.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an othercentre record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.othercentre.remove(ctx.params);
  }
};
