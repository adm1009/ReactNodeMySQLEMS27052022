const Sequalize = require("sequelize");

const sequelize = new Sequalize("logindetails", "root", "password", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
global.sequelize = sequelize;
