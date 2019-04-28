CREATE DATABASE IF NOT EXISTS burrito_db;
USE burrito_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burrito;

-- Create the burrito table
CREATE TABLE burrito (
    id int NOT NULL AUTO_INCREMENT,
    burrito_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);