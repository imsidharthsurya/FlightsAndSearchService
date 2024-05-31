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
      await queryInterface.bulkInsert('Airports',[{
        name:"Mumbai international airport",
        cityId:14,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"navi mumbai airport",
        cityId:14,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"chembur airport",
        cityId:14,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Thane domestic airport",
        cityId:14,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Bengaluru international airport",
        cityId:15,
        createdAt:new Date(),
        updatedAt:new Date()
      }],{})
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
