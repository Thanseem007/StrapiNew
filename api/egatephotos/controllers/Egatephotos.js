'use strict';

/**
 * Egatephotos.js controller
 *
 * @description: A set of functions called "actions" for managing `Egatephotos`.
 */

module.exports = {

  /**
   * Retrieve egatephotos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.egatephotos.search(ctx.query);
    } else {
      return strapi.services.egatephotos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a egatephotos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.egatephotos.fetch(ctx.params);
  },

  /**
   * Count egatephotos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.egatephotos.count(ctx.query);
  },

  /**
   * Create a/an egatephotos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.egatephotos.add(ctx.request.body);
  },

  /**
   * Update a/an egatephotos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.egatephotos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an egatephotos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.egatephotos.remove(ctx.params);
  }
};
