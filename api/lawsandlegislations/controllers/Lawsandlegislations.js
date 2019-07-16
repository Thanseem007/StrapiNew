'use strict';

/**
 * Lawsandlegislations.js controller
 *
 * @description: A set of functions called "actions" for managing `Lawsandlegislations`.
 */

module.exports = {

  /**
   * Retrieve lawsandlegislations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lawsandlegislations.search(ctx.query);

    } else if (ctx.query.LegislationName) {
      return strapi.services.lawsandlegislations.searchor(ctx.query);
    }
    else {
      return strapi.services.lawsandlegislations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lawsandlegislations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.lawsandlegislations.fetch(ctx.params);
  },

  /**
   * Count lawsandlegislations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    if (ctx.query.LegislationName) {
      return strapi.services.lawsandlegislations.countor(ctx.query);
    }
    else {
      return strapi.services.lawsandlegislations.count(ctx.query);
    }

    
  },

  /**
   * Create a/an lawsandlegislations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lawsandlegislations.add(ctx.request.body);
  },

  /**
   * Update a/an lawsandlegislations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lawsandlegislations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lawsandlegislations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lawsandlegislations.remove(ctx.params);
  }
};
