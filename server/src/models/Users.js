const Sequelize = require("sequelize");

module.exports = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER(1000),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: { type: Sequelize.STRING(300), allowNull: false },
  password: { type: Sequelize.STRING(300), allowNull: false },
  question: Sequelize.STRING(300),
  answer: Sequelize.STRING(300),
});
