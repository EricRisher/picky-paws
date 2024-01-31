const Pet = require("../models/Pet");

const petData = [
    {
        pet_name: "Buddy",
        species: "Dog",
        breed: "Golden Retriever",
        birth_date: "2018-01-01",
        owner_id: 1,
    },
    {
        pet_name: "Max",
        species: "Dog",
        breed: "Golden Retriever",
        birth_date: "2019-01-01",
        owner_id: 2,
    },
    {
        pet_name: "Charlie",
        species: "Dog",
        breed: "Golden Retriever",
        birth_date: "2020-01-01",
        owner_id: 3,
    },
    {
        pet_name: "Bella",
        species: "Cat",
        breed: "Siamese",
        birth_date: "2018-01-01",
        owner_id: 4,
    },
    {
        pet_name: "Lucy",
        species: "Cat",
        breed: "Siamese",
        birth_date: "2019-01-01",
        owner_id: 5,
    },
    {
        pet_name: "Molly",
        species: "Cat",
        breed: "Siamese",
        birth_date: "2020-01-01",
        owner_id: 6,
    },
    {
        pet_name: "Daisy",
        species: "Dog",
        breed: "Labrador Retriever",
        birth_date: "2018-01-01",
        owner_id: 7,
    },
    {
        pet_name: "Bailey",
        species: "Dog",
        breed: "Labrador Retriever",
        birth_date: "2019-01-01",
        owner_id: 8,
    },
    {
        pet_name: "Maggie",
        species: "Dog",
        breed: "Labrador Retriever",
        birth_date: "2020-01-01",
        owner_id: 9,
    },
    {
        pet_name: "Sadie",
        species: "Cat",
        breed: "Persian",
        birth_date: "2018-01-01",
        owner_id: 10,
    }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;