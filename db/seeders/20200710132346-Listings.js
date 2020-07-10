"use strict"
var faker = require("faker")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const listings = new Array(5).fill().map(() => ({
      userId: 1,
      name: faker.company.companyName(),
      description: faker.lorem.lines(2),
      address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
      price: faker.finance.amount() * 10,
      maxAllow: Math.floor(Math.random() * (5 - 1) + 1),
      payDate: `${Math.floor(Math.random() * (31 - 1) + 1)} de cada mes`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    await queryInterface.bulkInsert("listings", listings, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("listings", null, {})
  },
}
