const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Pet = require("./Pet");

class PetFoodPreference extends Model {}

PetFoodPreference.init(
  {
    preference_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pet,
        key: "pet_id",
      },
    },
    food_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "pet_food_preference",
    timestamps: false,
    freezeTableName: true,
    tableName: "pet_food_preferences",
  }
);

module.exports = PetFoodPreference;
