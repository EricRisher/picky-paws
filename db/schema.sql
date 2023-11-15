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

-- Table to store information about pet owners
CREATE TABLE IF NOT EXISTS owners (
    owners_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Table to store information about pets
CREATE TABLE IF NOT EXISTS pets (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_name VARCHAR(50) NOT NULL,
    species VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    birth_date DATE,
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES owners(owner_id)
);

-- Table to associate pets with their preferred pet food
CREATE TABLE IF NOT EXISTS pet_food_preferences (
    preference_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT,
    food_id INT,
    FOREIGN KEY (pet_id) REFERENCES pets(pet_id),
    FOREIGN KEY (food_id) REFERENCES pet_food(food_id)
);