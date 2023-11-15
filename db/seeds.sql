-- Insert sample data into the owners table
INSERT INTO owners (first_name, last_name, email, phone_number, address) VALUES
    ('John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Main St'),
    ('Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', '456 Oak St');

-- Insert sample data into the pets table
INSERT INTO pets (pet_name, species, breed, birth_date, owner_id) VALUES
    ('Buddy', 'Dog', 'Labrador Retriever', '2018-05-15', 1),
    ('Whiskers', 'Cat', 'Siamese', '2019-02-20', 2);

-- Insert sample data into the pet_food table
INSERT INTO pet_food (brand, type, flavor, ingredients, nutritional_info) VALUES
    ('SuperPet', 'Dry', 'Chicken', 'Chicken Meal, Corn, Rice', 'Protein: 25%, Fat: 12%'),
    ('HealthyPaws', 'Wet', 'Fish', 'Fish, Water, Vitamins', 'Protein: 18%, Fat: 8%');
