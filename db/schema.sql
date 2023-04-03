DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

USE recipe_db;
/*
CREATE TABLE measurement_units


CREATE TABLE measurement_qty


CREATE TABLE ingredients


CREATE TABLE meal_type 


CREATE TABLE user_details


CREATE TABLE recipe


CREATE TABLE allergies


CREATE TABLE categories


CREATE TABLE recipe_rating
*/

-- A start and tester idea


-- Create table for measurements
CREATE TABLE measurements (
  id INT NOT NULL PRIMARY KEY,
  measurement VARCHAR(20) NOT NULL
);

-- Insert data into measurements table
INSERT INTO measurements (id, measurement)
VALUES
  (1, 'teaspoon'),
  (2, 'tablespoon'),
  (3, 'cup'),
  (4, 'ounce'),
  (5, 'pound');

-- Create table for ingredients
CREATE TABLE ingredients (
  id INT NOT NULL PRIMARY KEY,
  ingredient_name VARCHAR(50) NOT NULL,
  allergy_info VARCHAR(50)
);

-- Insert data into ingredients table
INSERT INTO ingredients (id, ingredient_name, allergy_info)
VALUES
  (1, 'flour', NULL),
  (2, 'sugar', NULL),
  (3, 'salt', NULL),
  (4, 'peanuts', 'contains nuts'),
  (5, 'milk', 'contains dairy');

-- Create table for recipes
CREATE TABLE recipes (
  id INT NOT NULL PRIMARY KEY,
  recipe_name VARCHAR(100) NOT NULL,
  instructions TEXT NOT NULL,
  meal_type VARCHAR(50) NOT NULL,
  rating DECIMAL(3, 2) DEFAULT 0.0
);

-- Insert data into recipes table
INSERT INTO recipes (id, recipe_name, instructions, meal_type, rating)
/*VALUES
  (1, 'Chocolate Chip Cookies', '1. Preheat oven to 375 degrees F. 2. Cream butter and sugars until light and fluffy. 3. Add eggs and vanilla and beat well. 4. Mix in flour, baking soda, and salt. 5. Stir in chocolate chips. 6. Drop dough by spoonfuls onto baking sheet. 7. Bake for 8-10 minutes.', 'Dessert', 4.5),
  (2, 'Chicken Parmesan', '1. Preheat oven to 375 degrees F. 2. Season chicken with salt, pepper, and Italian seasoning. 3. Dredge chicken in flour, then egg, then breadcrumbs. 4. Heat oil in a large skillet and brown chicken on both sides. 5. Transfer chicken to a baking dish and top with marinara sauce and mozzarella cheese. 6. Bake for 20-25 minutes or until chicken is cooked through and cheese is melted.', 'Main Dish', 4.0);
*/

-- See if its possible to hook in an api to do this part off of here, it might be a bit too 
-- Create table for recipe ingredients
CREATE TABLE recipe_ingredients (
  recipe_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  measurement_id INT NOT NULL,
  amount DECIMAL(5, 2) NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
  FOREIGN KEY (measurement_id) REFERENCES measurements(id),
  PRIMARY KEY (recipe_id, ingredient_id)
);

-- Insert data into recipe_ingredients table for Chocolate Chip Cookies
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, measurement_id, amount)
VALUES
  (1, 1, 3, 2),
  (1, 2, 3, 1),
  (1, 3, 1, 0.5),
  (1, 4, 4, 1),
  (1, 5, 2, 0.5);

-- Need data for the ingredients ? Maybe hook it up to           https://www.kaggle.com/datasets/kaggle/recipe-ingredients-dataset          check out how to set it up maybe

-- Create table for allergies
CREATE TABLE allergies (
  id INT NOT NULL PRIMARY KEY,
  allergy_name VARCHAR(50) NOT NULL
);

-- Insert data into allergies table
INSERT INTO allergies (id, allergy_name)
VALUES
  (1, 'nuts'),
  (2, 'dairy'),
  (3, 'gluten');

-- Create table for recipe allergies
CREATE TABLE recipe_allergies (
  recipe_id INT NOT NULL,
  allergy_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (allergy_id) REFERENCES allergies(id),
  PRIMARY KEY (recipe_id, allergy_id)
);

-- Insert data into recipe_allergies table for Chocolate Chip Cookies
INSERT INTO recipe_allergies (recipe_id, allergy_id)
VALUES
  (1, 1),
  (1, 2);

-- Create table for meal types
CREATE TABLE meal_types (
  id INT NOT NULL PRIMARY KEY,
  meal_type_name VARCHAR(50) NOT NULL
);

-- Insert data into meal types table
INSERT INTO meal_types (id, meal_type_name)
VALUES
  (1, 'Breakfast'),
  (2, 'Lunch'),
  (3, 'Dinner'),
  (4, 'Dessert');

-- Create table for recipe meal types
CREATE TABLE recipe_meal_types (
  recipe_id INT NOT NULL,
  meal_type_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (meal_type_id) REFERENCES meal_types(id),
  PRIMARY KEY (recipe_id, meal_type_id)
);

-- Insert data into recipe_meal_types table for Chocolate Chip Cookies
INSERT INTO recipe_meal_types (recipe_id, meal_type_id)
VALUES
  (1, 4);

-- Create table for recipe ratings
CREATE TABLE recipe_ratings (
  id INT NOT NULL PRIMARY KEY,
  recipe_id INT NOT NULL,
  rating DECIMAL(3, 2) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert data into recipe_ratings table
INSERT INTO recipe_ratings (id, recipe_id, rating, user_id)
VALUES
  (1, 1, 4.0, 1),
  (2, 1, 5.0, 2),
  (3, 2, 4.0, 1),
  (4, 2, 3.5, 2);




/* THINGS STILL TO DO
user details
add / impliment an api or database in a way that adds more info into the db

form input for user generated recipes

history of past recipes viewed ** maybe add last 








*/

