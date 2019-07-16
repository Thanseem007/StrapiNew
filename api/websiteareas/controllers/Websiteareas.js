'use strict';

/**
 * Websiteareas.js controller
 *
 * @description: A set of functions called "actions" for managing `Websiteareas`.
 */

module.exports = {

  /**
   * Retrieve websiteareas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websiteareas.search(ctx.query);
    } else {
      return strapi.services.websiteareas.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websiteareas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.websiteareas.fetch(ctx.params);
  },

  /**
   * Count websiteareas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websiteareas.count(ctx.query);
  },

  /**
   * Create a/an websiteareas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websiteareas.add(ctx.request.body);
  },

  /**
   * Update a/an websiteareas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websiteareas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websiteareas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websiteareas.remove(ctx.params);
  }
};
