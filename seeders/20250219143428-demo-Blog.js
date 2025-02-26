"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Blogs", [
      {
        authorId: 1,
        title: "Postgres is cool",
        image: "/img/img pro.jpg",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        title: "Javascript is cool",
        image: "/img/img pro.jpg",
        content:
          "popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Contrary to ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        title: "Boothstrap is cool",
        image: "/img/img pro.jpg",
        content:
          "literature B Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
