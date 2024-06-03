'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airplanes',[
        {
          modelNumber:"Boeing 787",
          capacity:185,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"Douglas DC-3",
          capacity:220,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"Boeing B-29 Superfortress",
          capacity:209,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"Gulfstream G500",
          capacity:110,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"Boeing 747",
          capacity:190,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
