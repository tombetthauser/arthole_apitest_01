'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Artworks', [
      {
        artistId: 1,
        imageUrl: "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2016/08/JESSE-DRAXLER_LR.jpg",
        title: "Sacramento Collage I",
        height: 10.5,
        width: 14,
        depth: null,
        measurementUnit: "inches",
        seconds: null,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artistId: 2,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/52598ef0e4b077ec7f47f8b9/1606070592822-74SD7P1GXBKZ0VXAYJ9C/ke17ZwdGBToddI8pDm48kIu1QHqWqYcqSXGQukjVMYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fIG4lvOJgCZoc7R0Cd0Owykpqjz4OyDzVxk_JLua2qGvQ/Beau+Wild+Graffiti+mixed+media+on+canvas+36+x+36.jpg?format=2500w",
        title: "Untitled Memory",
        height: 19,
        width: 24.5,
        depth: null,
        measurementUnit: "inches",
        seconds: null,
        year: 2019,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Artworks', null, {});
  }
};
