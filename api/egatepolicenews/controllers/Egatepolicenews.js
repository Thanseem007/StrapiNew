'use strict';

/**
 * Egatepolicenews.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatepolicenews`.
 */

module.exports = {

  /**
   * Retrieve egatepolicenews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatepolicenews.search(ctx.query);
    } else {
      return strapi.services.egatepolicenews.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatepolicenews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatepolicenews.fetch(ctx.params);
  },

  /**
   * Count egatepolicenews records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatepolicenews.count(ctx.query);
  },

  /**
   * Create a/an egatepolicenews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatepolicenews.add(ctx.request.body);
  },

  /**
   * Update a/an egatepolicenews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatepolicenews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatepolicenews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatepolicenews.remove(ctx.params);
  }
};
