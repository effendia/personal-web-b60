"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * seeder berguna untuk membuat data damy/bohongan supaya database/table tdk kosong
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        name: "Amelia Kulsum",
        email: "ameliakulsum21@gmail.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nafisha",
        email: "nafisha@gmail.com",
        password: "4321",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nurul",
        email: "nurul@gmail.com",
        password: "1111",
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
