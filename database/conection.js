const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "pokemondata",
  username: "root",
  password: "9428",
  host: "localhost",
  dialect: "mysql"
})

module.exports = db