-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2024 at 01:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esyrecp`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `Ingredient_ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`Ingredient_ID`, `Name`, `Description`, `Category`) VALUES
(1, 'Chicken Breast', 'Boneless, skinless chicken breast', 'meat'),
(2, 'Onion', 'Chopped onion', 'vegetable'),
(3, 'Garlic', 'Minced garlic', 'vegetable'),
(4, 'Tomato', 'Fresh tomato', 'vegetable'),
(5, 'Olive Oil', 'Extra virgin olive oil', 'spice'),
(6, 'Salt', 'Table salt', 'spice'),
(7, 'Pepper', 'Black pepper', 'spice'),
(8, 'Spaghetti', NULL, ''),
(9, 'Ground Beef', NULL, ''),
(10, 'Tomato Paste', NULL, ''),
(11, 'Chicken', NULL, ''),
(12, 'Ginger', NULL, ''),
(13, 'Spices', NULL, ''),
(14, 'Tomatoes', NULL, ''),
(15, 'Coconut Milk', NULL, ''),
(16, 'Carrots', NULL, ''),
(17, 'Celery', NULL, ''),
(18, 'Potatoes', NULL, ''),
(19, 'Beef Broth', NULL, ''),
(20, 'Pasta', NULL, ''),
(21, 'Butter', NULL, ''),
(22, 'Heavy Cream', NULL, ''),
(23, 'Parmesan Cheese', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `instructions`
--

CREATE TABLE `instructions` (
  `Instruction_ID` int(11) NOT NULL,
  `Recipe_ID` int(11) NOT NULL,
  `Step_Number` int(11) DEFAULT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructions`
--

INSERT INTO `instructions` (`Instruction_ID`, `Recipe_ID`, `Step_Number`, `Description`) VALUES
(1, 1, 1, 'Heat oil in a large skillet'),
(2, 1, 2, 'Add chicken and cook until browned'),
(3, 2, 1, 'Saute onions and garlic'),
(4, 2, 2, 'Add tomatoes and broth'),
(5, 3, 1, 'Preheat grill'),
(6, 3, 2, 'Grill chicken for 5-6 minutes per side'),
(13, 5, 1, 'Heat oil in a large pot over medium heat.'),
(14, 5, 2, 'Add onions and garlic, and cook until softened.'),
(15, 5, 3, 'Add ground beef and cook until browned.'),
(16, 5, 4, 'Stir in tomatoes, tomato paste, and seasonings.'),
(17, 5, 5, 'Simmer for 30 minutes, stirring occasionally.'),
(18, 5, 6, 'Serve over cooked spaghetti.'),
(19, 6, 1, 'Heat oil in a large pot over medium heat.'),
(20, 6, 2, 'Add onions and cook until golden brown.'),
(21, 6, 3, 'Add garlic, ginger, and spices, and cook for 2 minutes.'),
(22, 6, 4, 'Add chicken pieces and cook until browned.'),
(23, 6, 5, 'Stir in tomatoes and coconut milk.'),
(24, 6, 6, 'Simmer for 30 minutes, stirring occasionally.'),
(25, 6, 7, 'Serve with rice.'),
(32, 11, 1, 'Heat oil in a large pot over medium-high heat.'),
(33, 11, 2, 'Brown beef on all sides, then remove from pot.'),
(34, 11, 3, 'Add onions, carrots, and celery, and cook until softened.'),
(35, 11, 4, 'Add garlic and cook for 1 minute.'),
(36, 11, 5, 'Return beef to the pot, and add potatoes, broth, and spices.'),
(37, 11, 6, 'Bring to a boil, then reduce heat and simmer for 90 minutes.'),
(38, 11, 7, 'Serve warm.'),
(39, 12, 1, 'Cook pasta according to package instructions.'),
(40, 12, 2, 'In a pan, melt butter over medium heat.'),
(41, 12, 3, 'Add garlic and cook for 1 minute.'),
(42, 12, 4, 'Add heavy cream and simmer for 5 minutes.'),
(43, 12, 5, 'Stir in Parmesan cheese until melted.'),
(44, 12, 6, 'Add cooked pasta to the sauce and toss to coat.'),
(45, 12, 7, 'Serve warm with additional Parmesan.');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `Recipe_ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Servings` int(11) DEFAULT NULL,
  `Cooking_Time` int(11) DEFAULT NULL,
  `Rating` float DEFAULT NULL,
  `recipe_img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`Recipe_ID`, `Name`, `Description`, `Servings`, `Cooking_Time`, `Rating`, `recipe_img`) VALUES
(1, 'Chicken Fajitas', 'Sizzling chicken and vegetables', 4, 30, 4, 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Chicken-Fajitas-9-1.jpg'),
(2, 'Tomato Soup', 'Creamy tomato soup', 6, 45, 4.2, 'https://images.unsplash.com/photo-1629978444652-82a762b94041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D'),
(3, 'Grilled Chicken', 'Grilled chicken breast', 2, 20, 3, 'https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JpbGxlZCUyMENoaWNrZW4lNUN8ZW58MHx8MHx8fDA%3D'),
(5, 'Spaghetti Bolognese', 'A classic Italian pasta dish with rich meat sauce.', 4, 60, 4.33333, 'https://images.unsplash.com/photo-1626844131082-256783844137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fHww'),
(6, 'Chicken Curry', 'A flavorful and spicy chicken curry.', 4, 45, 5, 'https://images.unsplash.com/photo-1672933036331-e27ffae157bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww'),
(11, 'Beef Stew', 'A hearty and comforting beef stew with tender meat and vegetables.', 6, 120, 4, 'https://images.unsplash.com/photo-1664741319755-920c2c616bdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHN0ZXd8ZW58MHx8MHx8fDA%3D'),
(12, 'Pasta Alfredo', 'A creamy and rich Alfredo pasta dish.', 4, 30, NULL, 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWxmcmVkb3xlbnwwfHwwfHx8MA%3D%3D');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ingredients`
--

CREATE TABLE `recipe_ingredients` (
  `Recipe_Ingredient_ID` int(11) NOT NULL,
  `Recipe_ID` int(11) NOT NULL,
  `Ingredient_ID` int(11) NOT NULL,
  `Quantity` float DEFAULT NULL,
  `Unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_ingredients`
--

INSERT INTO `recipe_ingredients` (`Recipe_Ingredient_ID`, `Recipe_ID`, `Ingredient_ID`, `Quantity`, `Unit`) VALUES
(1, 1, 1, 1.5, 'pounds'),
(2, 1, 2, 1, 'cup'),
(3, 1, 3, 3, 'cloves'),
(4, 2, 4, 2, 'cups'),
(5, 2, 5, 2, 'tablespoons'),
(6, 3, 1, 1, 'pound'),
(7, 5, 8, 200, 'grams'),
(8, 5, 9, 500, 'grams'),
(9, 5, 2, 1, 'piece'),
(10, 5, 3, 2, 'cloves'),
(11, 5, 10, 2, 'tablespoons'),
(12, 6, 11, 500, 'grams'),
(13, 6, 2, 2, 'pieces'),
(14, 6, 3, 3, 'cloves'),
(15, 6, 12, 1, 'tablespoon'),
(16, 6, 13, 2, 'tablespoons'),
(17, 6, 14, 400, 'grams'),
(18, 6, 15, 200, 'ml'),
(24, 11, 2, 1, 'piece'),
(25, 11, 16, 2, 'pieces'),
(26, 11, 17, 2, 'stalks'),
(27, 11, 3, 2, 'cloves'),
(28, 11, 18, 3, 'pieces'),
(29, 11, 19, 1, 'liter'),
(30, 11, 13, 1, 'tablespoon'),
(31, 12, 20, 400, 'grams'),
(32, 12, 21, 50, 'grams'),
(33, 12, 3, 2, 'cloves'),
(34, 12, 22, 200, 'ml'),
(35, 12, 23, 100, 'grams');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `Username`, `Password`) VALUES
(1, 'admin', 'admin'),
(2, 'arjun', 'arjunpass'),
(3, 'new', 'pass'),
(4, 'admin@2004', 'adminpass'),
(7, '', ''),
(9, 'arjunnew', 'new');

-- --------------------------------------------------------

--
-- Table structure for table `user_reviews`
--

CREATE TABLE `user_reviews` (
  `Review_ID` int(11) NOT NULL,
  `Recipe_ID` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Review_Text` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_reviews`
--

INSERT INTO `user_reviews` (`Review_ID`, `Recipe_ID`, `Rating`, `Review_Text`) VALUES
(1, 1, 5, 'This recipe is amazing! Highly recommend.'),
(3, 5, 4, 'This recipe is amazing! Highly recommend.'),
(4, 5, 4, 'This recipe is amazing! Highly recommend.'),
(5, 11, 5, 'This recipe is amazing! Highly recommend.'),
(6, 3, 3, 'This recipe is amazing! Highly recommend.'),
(7, 11, 3, 'Very amazing'),
(8, 11, 4, 'Amazing!'),
(9, 6, 5, 'Amazing'),
(10, 5, 5, 'Amazing!'),
(11, 1, 3, 'Amazing');

--
-- Triggers `user_reviews`
--
DELIMITER $$
CREATE TRIGGER `update_recipe_rating` AFTER INSERT ON `user_reviews` FOR EACH ROW BEGIN
    DECLARE avg_rating FLOAT;
    
    -- Calculate the new average rating
    SELECT AVG(Rating) INTO avg_rating
    FROM user_reviews
    WHERE Recipe_ID = NEW.Recipe_ID;
    
    -- Update the rating in the recipes table
    UPDATE recipes
    SET Rating = avg_rating
    WHERE Recipe_ID = NEW.Recipe_ID;
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`Ingredient_ID`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Indexes for table `instructions`
--
ALTER TABLE `instructions`
  ADD PRIMARY KEY (`Instruction_ID`),
  ADD KEY `fk_Instructions_Recipes` (`Recipe_ID`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`Recipe_ID`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Indexes for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`Recipe_Ingredient_ID`),
  ADD KEY `fk_Recipe_Ingredients_Recipes` (`Recipe_ID`),
  ADD KEY `fk_Recipe_Ingredients_Ingredients` (`Ingredient_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexes for table `user_reviews`
--
ALTER TABLE `user_reviews`
  ADD PRIMARY KEY (`Review_ID`),
  ADD KEY `fk_User_Reviews_Recipes` (`Recipe_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `Ingredient_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `instructions`
--
ALTER TABLE `instructions`
  MODIFY `Instruction_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `Recipe_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  MODIFY `Recipe_Ingredient_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_reviews`
--
ALTER TABLE `user_reviews`
  MODIFY `Review_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `instructions`
--
ALTER TABLE `instructions`
  ADD CONSTRAINT `fk_Instructions_Recipes` FOREIGN KEY (`Recipe_ID`) REFERENCES `recipes` (`Recipe_ID`);

--
-- Constraints for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `fk_Recipe_Ingredients_Ingredients` FOREIGN KEY (`Ingredient_ID`) REFERENCES `ingredients` (`Ingredient_ID`),
  ADD CONSTRAINT `fk_Recipe_Ingredients_Recipes` FOREIGN KEY (`Recipe_ID`) REFERENCES `recipes` (`Recipe_ID`);

--
-- Constraints for table `user_reviews`
--
ALTER TABLE `user_reviews`
  ADD CONSTRAINT `fk_User_Reviews_Recipes` FOREIGN KEY (`Recipe_ID`) REFERENCES `recipes` (`Recipe_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
