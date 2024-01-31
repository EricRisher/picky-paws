const Owner = require('../models/Owner');

const ownerData = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@test.com',
        password: 'password123'
    },
    {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'janesmith@test.com',
        password: 'testpass456'
    },
    {
        first_name: 'Mike',
        last_name: 'Johnson',
        email: 'mikejohnson@test.com',
        password: 'securepass789'
    },
    {
        first_name: 'Emily',
        last_name: 'Williams',
        email: 'emily@test.com',
        password: 'password456'
    },
    {
        first_name: 'Robert',
        last_name: 'Brown',
        email: 'robert@test.com',
        password: 'pass1234'
    },
    {
        first_name: 'Sara',
        last_name: 'Miller',
        email: 'sara@test.com',
        password: 'sara5678'
    },
    {
        first_name: 'David',
        last_name: 'Taylor',
        email: 'david@test.com',
        password: 'davidpass'
    },
    {
        first_name: 'Maria',
        last_name: 'Garcia',
        email: 'maria@test.com',
        password: 'maria789'
    },
    {
        first_name: 'Andrew',
        last_name: 'Clark',
        email: 'andrew@test.com',
        password: 'andrew123'
    },
    {
        first_name: 'Laura',
        last_name: 'White',
        email: 'laura@test.com',
        password: 'laura456'
    }
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;