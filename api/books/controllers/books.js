const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
module.exports = {
  /**
   * Retrieve a book.
   *
   * Note: Custom `findOne` implementation to support slugs over ids.
   *
   * @return {Object}
   */
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.books.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.books });
  },

  /**
   * Retrieve the latest featured book.
   *
   * @return {Object}
   */
  async findFeatured() {
    const entity = await strapi.services.books.find({ featured: true, _limit: 1, _sort: 'release_date:desc' });
    return sanitizeEntity(entity[0], { model: strapi.models.books });
  },
};
