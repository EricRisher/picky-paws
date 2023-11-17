const { Pet }= require('../models');

const createPet = async (req, res) => {
    try {
        const newPet = await Pet.create({
            pet_name: req.body.pet_name,
            species: req.body.species,
            breed: req.body.breed,
            birth_date: req.body.birth_date,
        });
        res.json(newPet);
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    createPet
};