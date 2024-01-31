const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PetFood extends Model {}

PetFood.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavor: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.TEXT,
    },
    nutritional_info: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "pet_food",
    freezeTableName: true,
    tableName: "pet_foods",
  }
);

module.exports = PetFood;
