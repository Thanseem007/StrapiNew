'use strict';

/**
 * Egatealbumstorevideo.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatealbumstorevideo`.
 */

module.exports = {

  /**
   * Retrieve egatealbumstorevideo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatealbumstorevideo.search(ctx.query);
    } else {
      return strapi.services.egatealbumstorevideo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatealbumstorevideo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatealbumstorevideo.fetch(ctx.params);
  },

  /**
   * Count egatealbumstorevideo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatealbumstorevideo.count(ctx.query);
  },

  /**
   * Create a/an egatealbumstorevideo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatealbumstorevideo.add(ctx.request.body);
  },

  /**
   * Update a/an egatealbumstorevideo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatealbumstorevideo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatealbumstorevideo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatealbumstorevideo.remove(ctx.params);
  }
};
