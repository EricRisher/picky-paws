const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Pet = require("./Pet");


class Owner extends Model {}

Owner.init(
  {
    owner_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },

  {
    sequelize,
    modelName: "Owner",
    timestamps: false,
  }
);

module.exports = Owner;
