'use strict';

/**
 * Websitepolicenew.js controller
 *
 * @description: A set of functions called "actions" for managing `Websitepolicenew`.
 */

module.exports = {

  /**
   * Retrieve websitepolicenew records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websitepolicenew.search(ctx.query);
    } else {
      return strapi.services.websitepolicenew.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websitepolicenew record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websitepolicenew.fetch(ctx.params);
  },

  /**
   * Count websitepolicenew records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websitepolicenew.count(ctx.query);
  },

  /**
   * Create a/an websitepolicenew record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websitepolicenew.add(ctx.request.body);
  },

  /**
   * Update a/an websitepolicenew record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websitepolicenew.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websitepolicenew record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websitepolicenew.remove(ctx.params);
  }
};
