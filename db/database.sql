CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id));

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('BLT', false);