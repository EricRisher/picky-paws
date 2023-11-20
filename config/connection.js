require('dotenv').config();
const Sequelize = require('sequelize');
const JAWSDB_URL =
  "mysql://wee846igd6opyobo:l8m4ab7qlcnibwf2@jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/bd56pcqod4jd4z1b";

let sequelize;

// create connection to our db

if (process.env.JAWSDB_URL || JAWSDB_URL) {
  // If JawsDB is present (Heroku), use its URL
  sequelize = new Sequelize(process.env.JAWSDB_URL || JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  // Use local database connection
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;