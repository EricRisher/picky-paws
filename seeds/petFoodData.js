const PetFood = require("../models/PetFood");

const petFoodData = [
  {
    brand: "Purina",
    type: "Dry",
    flavor: "Chicken",
    ingredients: "Chicken, corn, wheat, soy",
    nutritional_info: "Protein: 25%, Fat: 15%, Fiber: 3%",
  },
  {
    brand: "Hill's Science Diet",
    type: "Wet",
    flavor: "Salmon",
    ingredients: "Salmon, water, rice",
    nutritional_info: "Protein: 20%, Fat: 10%, Fiber: 2%",
  },
  {
    brand: "Royal Canin",
    type: "Dry",
    flavor: "Beef",
    ingredients: "Beef, rice, wheat",
    nutritional_info: "Protein: 22%, Fat: 12%, Fiber: 4%",
  },
  {
    brand: "Iams",
    type: "Dry",
    flavor: "Turkey",
    ingredients: "Turkey, corn, rice",
    nutritional_info: "Protein: 21%, Fat: 14%, Fiber: 3%",
  },
  {
    brand: "Blue Buffalo",
    type: "Dry",
    flavor: "Lamb",
    ingredients: "Lamb, potatoes, peas",
    nutritional_info: "Protein: 24%, Fat: 15%, Fiber: 5%",
  },
  {
    brand: "Wellness",
    type: "Wet",
    flavor: "Tuna",
    ingredients: "Tuna, water, carrots",
    nutritional_info: "Protein: 18%, Fat: 8%, Fiber: 1%",
  },
  {
    brand: "Merrick",
    type: "Dry",
    flavor: "Duck",
    ingredients: "Duck, sweet potatoes, peas",
    nutritional_info: "Protein: 26%, Fat: 16%, Fiber: 4%",
  },
  {
    brand: "Canidae",
    type: "Dry",
    flavor: "Salmon",
    ingredients: "Salmon, brown rice, peas",
    nutritional_info: "Protein: 23%, Fat: 14%, Fiber: 4%",
  },
  {
    brand: "Nutro",
    type: "Wet",
    flavor: "Chicken & Rice",
    ingredients: "Chicken, rice, potatoes",
    nutritional_info: "Protein: 20%, Fat: 10%, Fiber: 2%",
  },
  {
    brand: "Muse",
    type: "Dry",
    flavor: "Ocean Whitefish",
    ingredients: "Ocean whitefish, peas, potatoes",
    nutritional_info: "Protein: 22%, Fat: 12%, Fiber: 3%",
  },
];

const seedPetFood = () => PetFood.bulkCreate(petFoodData);

module.exports = seedPetFood;