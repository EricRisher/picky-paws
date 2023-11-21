require('dotenv').config();
const Sequelize = require('sequelize');
let sequelize;

// create connection to our db

if (process.env.JAWSDB_URL) {
  // If JawsDB is present (Heroku), use its URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
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

