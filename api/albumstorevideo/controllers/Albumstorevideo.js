'use strict';

/**
 * Albumstorevideo.js controller
 *
 * @description: A set of functions called "actions" for managing `Albumstorevideo`.
 */

module.exports = {

  /**
   * Retrieve albumstorevideo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.albumstorevideo.search(ctx.query);
    } else {
      return strapi.services.albumstorevideo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a albumstorevideo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.albumstorevideo.fetch(ctx.params);
  },

  /**
   * Count albumstorevideo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.albumstorevideo.count(ctx.query);
  },

  /**
   * Create a/an albumstorevideo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.albumstorevideo.add(ctx.request.body);
  },

  /**
   * Update a/an albumstorevideo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.albumstorevideo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an albumstorevideo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.albumstorevideo.remove(ctx.params);
  }
};
