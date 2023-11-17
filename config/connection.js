require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

// create connection to our db

if (process.env.JAWSDB_URL) {
  // If JawsDB is present (Heroku), use its URL
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  // Use local database connection
  sequelize = new Sequelize(
    process.env.JAWSDB_URL || process.env.DB_NAME,
    process.env.DB_USER || "wee846igd6opyobo",
    process.env.DB_PW || "l8m4ab7qlcnibwf2",
    {
      host: process.env.JAWSDB_URL ? undefined : "localhost",
      dialect: "mysql",
      port: process.env.JAWSDB_URL ? undefined : 3306,
    }
  );
}

module.exports = sequelize;