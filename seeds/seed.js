const seedOwners = require('./ownerData');
const seedPets = require('./petData');
const seedPetFood = require('./petFoodData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedOwners();
    console.log('\n----- OWNERS SEEDED -----\n');

    await seedPets();
    console.log('\n----- PETS SEEDED -----\n');

    await seedPetFood();
    console.log('\n----- PET FOOD SEEDED -----\n');

    process.exit(0);
};

seedAll();