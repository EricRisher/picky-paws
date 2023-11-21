const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Owner = require("./Owner");

class Pet extends Model {}

Pet.init(
  {
  pet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pet_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
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
    modelName: "pets",
    timestamps: false,
    freezeTableName: true,
    tableName: "pets",
}
);



module.exports = Pet;
