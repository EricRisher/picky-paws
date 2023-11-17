const { PetFood } = require('../models');

const createPetFood = async (req, res) => {
    try {
        const newPetFood = await PetFood.create({
            food_id: req.body.food_id,
            brand: req.body.brand,
            type: req.body.type,
            flavor: req.body.flavor,
            ingredients: req.body.ingredients,
            nutritional_info: req.body.nutritional_info
        })
        res.json(newPetFood);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPetFood
};