const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const Owner = require('../models/Owner');
const PetFood = require("../models/PetFood");
const PetFoodPreference = require("../models/PetFoodPreference");


// Define API routes

router.get('/pets', async (req, res) => {
    try {
        const pet = await Pet.findAll();
           res.json(pet);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/owners', async (req, res) => {
    try {
        const owner = await Owner.findAll();
           res.json(owner);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/petfood', async (req, res) => {
    try {
        const petfood = await PetFood.findAll();
           res.json(petfood);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/preference', async (req, res) => {
    try {
        const petfoodpreference = await PetFoodPreference.findAll();
           res.json(petfoodpreference);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



router.post('/pets', async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
           res.json(pet);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/owners', async (req, res) => {
    try {
        const owner = await Owner.create(req.body);
           res.json(owner);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/petfood', async (req, res) => {
    try {
        const petfood = await PetFood.create(req.body);
           res.json(petfood);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/preference', async (req, res) => {
    try {
        const petfoodpreference = await PetFoodPreference.create(req.body);
           res.json(petfoodpreference);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;
