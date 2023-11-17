-- Create a Database
CREATE DATABASE IF NOT EXISTS pet_food_database;
USE pet_food_database;

-- Create Tables

-- Table to store information about pet food
CREATE TABLE IF NOT EXISTS pet_food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    flavor VARCHAR(50),
    ingredients TEXT,
    nutritional_info TEXT
);

-- Table to store information about pets
CREATE TABLE IF NOT EXISTS pets (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_name VARCHAR(50) NOT NULL,
    species VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    birth_date DATE
);

-- Table to store information about pet owners
CREATE TABLE IF NOT EXISTS owner (
    owner_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pet_id INT,
    FOREIGN KEY (pet_id) REFERENCES pets(pet_id)
);

-- Table to associate pets with their preferred pet food
CREATE TABLE IF NOT EXISTS pet_food_preferences (
    preference_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT,
    food_id INT,
    FOREIGN KEY (pet_id) REFERENCES pets(pet_id),
    FOREIGN KEY (food_id) REFERENCES pet_food(food_id)
);

-- View pets and their owners 
SELECT pets.pet_id, pets.pet_name, pets.species, owner.first_name, owner.last_name
FROM pets
JOIN owner ON owner.pet_id = pets.pet_id;

-- View all owners and their pets
SELECT * FROM owner;
SELECT * FROM pets;
SELECT * FROM pet_food;
