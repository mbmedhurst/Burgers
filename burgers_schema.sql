-- DROP  DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name VARCHAR(200) NOT NULL,
    isDevoured BOOLEAN DEFAULT false
);

-- UPDATE burgers
-- SET isDevoured = true
-- WHERE id = 3; 



