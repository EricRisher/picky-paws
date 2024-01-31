const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");
const Owner = require("../models/Owner");
const PetFood = require("../models/PetFood");
const PetFoodPreference = require("../models/PetFoodPreference");
const { sequelize } = require("../config/connection");

// Define API routes

router.get("/pets", async (req, res) => {
  try {
    const pet = await Pet.findAll();
    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/pets", async (req, res) => {
  try {
    // Create a new pet
    const newPet = await Pet.create({
      pet_name: req.body.pet_name,
      species: req.body.species,
      breed: req.body.breed,
      birth_date: req.body.birth_date,
      owner_id: req.body.owner_id,
    });
    res.status(200).json(newPet);
  } catch (error) {
    if (error ) {
      // Log validation errors
      console.error("Validation Errors:", error);
    } else {
      console.error(error);
    }
    res.status(500).send("Error adding pet");
  }
});

router.get("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.destroy({
      where: {
        pet_id: req.params.id,
      },
    });
    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.get("/owners", async (req, res) => {
  try {
    const owner = await Owner.findAll();
    res.json(owner);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/petfood", async (req, res) => {
  try {
    const petfood = await PetFood.findAll();

    // Create an array of strings containing pet food details
    const petfoodDetails = petfood.map(
      (item) => `
            <li>
                <div>
                    <strong>Brand:</strong> ${item.brand}
                </div>
                <div>
                    <strong>Type:</strong> ${item.type}
                </div>
                ${
                  item.flavor
                    ? `<div><strong>Flavor:</strong> ${item.flavor}</div>`
                    : ""
                }
                ${
                  item.ingredients
                    ? `<div><strong>Ingredients:</strong> ${item.ingredients}</div>`
                    : ""
                }
                ${
                  item.nutritional_info
                    ? `<div><strong>Nutritional Info:</strong> ${item.nutritional_info}</div>`
                    : ""
                }
                <hr>
            </li>
        `
    );

    // Construct the HTML response with styled unordered list
    const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pet Food List</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 20px;
                    }
                    h1 {
                        color: #333;
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                    }
                    li {
                        margin-bottom: 20px;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    strong {
                        color: #555;
                    }
                    hr {
                        margin-top: 10px;
                        margin-bottom: 10px;
                        border: 0;
                        border-top: 1px solid #ddd;
                    }
                </style>
            </head>
            <body>
                <h1>Pet Food List</h1>
                <ul>
                    ${petfoodDetails.join("")}
                </ul>
            </body>
            </html>
        `;

    // Set the Content-Type header to indicate that the response is HTML
    res.setHeader("Content-Type", "text/html");

    // Send the HTML response
    res.send(htmlResponse);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/preference", async (req, res) => {
  try {
    const petfoodpreference = await PetFoodPreference.findAll();
    res.json(petfoodpreference);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/owners", async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.json(owner);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/petfood", async (req, res) => {
  try {
    const petfood = await PetFood.create(req.body);
    res.json(petfood);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/preference", async (req, res) => {
  try {
    const petfoodpreference = await PetFoodPreference.create(req.body);
    res.json(petfoodpreference);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
