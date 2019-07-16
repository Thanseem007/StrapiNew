'use strict';

/**
 * Egatepublications.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatepublications`.
 */

module.exports = {

  /**
   * Retrieve egatepublications records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatepublications.search(ctx.query);
    } else {
      return strapi.services.egatepublications.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatepublications record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatepublications.fetch(ctx.params);
  },

  /**
   * Count egatepublications records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatepublications.count(ctx.query);
  },

  /**
   * Create a/an egatepublications record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatepublications.add(ctx.request.body);
  },

  /**
   * Update a/an egatepublications record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatepublications.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatepublications record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatepublications.remove(ctx.params);
  }
};
