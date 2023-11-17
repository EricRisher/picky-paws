const { Owner } = require('../models');

const createOwner = async (req, res) => {
    try {
        const newOwner = await Owner.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        })
        res.json(newOwner);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createOwner
};