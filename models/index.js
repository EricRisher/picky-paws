const Owner = require("./Owner");
const Pet = require("./Pet");
const PetFoodPreference = require("./PetFoodPreference");
const PetFood = require("./PetFood");

Owner.hasMany(Pet, {
  foreignKey: "owner_id",
});

Pet.belongsTo(Owner, {
  foreignKey: "owner_id",
});

Pet.belongsToMany(PetFood, {
    through: PetFoodPreference,
    foreignKey: "pet_id",
});

PetFood.belongsToMany(Pet, {
    through: PetFoodPreference,
    foreignKey: "food_id",
});

module.exports = { Owner, Pet, PetFoodPreference, PetFood };