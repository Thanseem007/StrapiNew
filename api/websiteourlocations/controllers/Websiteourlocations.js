'use strict';

/**
 * Websiteourlocations.js controller
 *
 * @description: A set of functions called "actions" for managing `Websiteourlocations`.
 */

module.exports = {

  /**
   * Retrieve websiteourlocations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websiteourlocations.search(ctx.query);
    } else {
      return strapi.services.websiteourlocations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websiteourlocations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websiteourlocations.fetch(ctx.params);
  },

  /**
   * Count websiteourlocations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websiteourlocations.count(ctx.query);
  },

  /**
   * Create a/an websiteourlocations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websiteourlocations.add(ctx.request.body);
  },

  /**
   * Update a/an websiteourlocations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websiteourlocations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websiteourlocations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websiteourlocations.remove(ctx.params);
  }
};
