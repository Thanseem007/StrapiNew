'use strict';

/**
 * Websitepolicestationregion.js controller
 *
 * @description: A set of functions called "actions" for managing `Websitepolicestationregion`.
 */

module.exports = {

  /**
   * Retrieve websitepolicestationregion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websitepolicestationregion.search(ctx.query);
    } else {
      return strapi.services.websitepolicestationregion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websitepolicestationregion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websitepolicestationregion.fetch(ctx.params);
  },

  /**
   * Count websitepolicestationregion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websitepolicestationregion.count(ctx.query);
  },

  /**
   * Create a/an websitepolicestationregion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websitepolicestationregion.add(ctx.request.body);
  },

  /**
   * Update a/an websitepolicestationregion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websitepolicestationregion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websitepolicestationregion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websitepolicestationregion.remove(ctx.params);
  }
};
