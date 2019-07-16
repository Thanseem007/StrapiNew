'use strict';

/**
 * Communityawareness.js controller
 *
 * @description: A set of functions called "actions" for managing `Communityawareness`.
 */

module.exports = {

  /**
   * Retrieve communityawareness records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.communityawareness.search(ctx.query);
    } else if (ctx.query.Subject) {
      return strapi.services.communityawareness.searchor(ctx.query);
    }
    else {
      return strapi.services.communityawareness.fetchAll(ctx.query);
    }


   
  },

  /**
   * Retrieve a communityawareness record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.communityawareness.fetch(ctx.params);
  },

  /**
   * Count communityawareness records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    if (ctx.query.Subject) {
      return strapi.services.communityawareness.countor(ctx.query);
    }
    else {
      return strapi.services.communityawareness.count(ctx.query);
    }
    
  },

  /**
   * Create a/an communityawareness record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.communityawareness.add(ctx.request.body);
  },

  /**
   * Update a/an communityawareness record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.communityawareness.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an communityawareness record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.communityawareness.remove(ctx.params);
  }
};
