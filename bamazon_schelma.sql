CREATE DATABASE `bamazon`;

USE  `bamazon`;

CREATE TABLE `products` (
  `itemID` INT(10) AUTO_INCREMENT NOT NULL,
  `productName` VARCHAR(100) NOT NULL,
  `departmentName` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stockQuantity` INTEGER(10) NOT NULL,
  PRIMARY KEY (`itemID`)
);

select * from `products`;

INSERT INTO `products` VALUES 
(1,"Apple","Electronics",500.50,10),
(2,"Samsung","Electronics",499.50,10),
(3,"Shampoo","Cosmetics",4.99,25),
(4,"TP","Cosmetics",5.00,5),
(5,"Gum","Food",.99,25),
(6,"Candy","Food",9.50,100),
(7,"Nike","Cloths",100,50),
(8,"Adidias","Shoes",99.99,12),
(9,"Shants","Other",9.99,8),
(10,"Spinner","Toy",5.99,25);

SELECT * FROM `products`;





-- CREATE DATABASE `bamazon`;

-- USE  `bamazon`;

-- CREATE TABLE `products` (
--   `itemID` INT(11) AUTO_INCREMENT NOT NULL,
--   `productName` VARCHAR(30) NOT NULL,
--   `departmentName` VARCHAR(100) NOT NULL,
--   `price` DECIMAL(10,2) NOT NULL,
--   `stockQuantity` INTEGER(10) NOT NULL,
--   PRIMARY KEY (`itemID`)
-- );


-- INSERT INTO `products` VALUES 
-- (1,"Apple","Electronics",999.99,10),
-- (2,"Samsung","Electronics",499.99,10),
-- (3,"Chrombook","Electronics",199.25,7),
-- (4,"Undies","Cloths",5.00,100),
-- (5,"Socks","Cloths",.99,50),
-- (6,"Protein","Food",39.50,7),
-- (7,"Snickers Food",1.50,45),
-- (8,"Candy","Food",.99,12),
-- (9,"Makeup","Toiletries",22.99,8),
-- (10,"TP","Toiletries",3.99,6);

-- SELECT * FROM `products`;



