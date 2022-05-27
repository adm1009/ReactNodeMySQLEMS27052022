"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(200),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: { type: Sequelize.STRING(300), allowNull: false },
      password: { type: Sequelize.STRING(300), allowNull: false },
      question: Sequelize.STRING(300),
      answer: Sequelize.STRING(300),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("users");
  },
};
