const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING
    },
    species: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "pet",
    timestamps: false,
    freezeTableName: true,
    tableName: "pets",
  }
);

module.exports = Pet;
