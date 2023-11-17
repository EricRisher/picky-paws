const { petFoodPreference } = require("../models");

const createPetFoodPreference = async (req, res) => {
    try {
        const newPetFoodPreference = await petFoodPreference.create({
            pet_id: req.body.pet_id,
            pet_food_id: req.body.pet_food_id,
        })
        res.json(newPetFoodPreference);
    } catch (error) {
        console.log(error);
    }
};