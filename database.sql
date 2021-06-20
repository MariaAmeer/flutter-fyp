CREATE DATABASE userdb;

-- \c userdb  => move control in the userDB

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    publicId VARCHAR(255),
    email VARCHAR(255),
    name VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255),
    phone int()
);

-- insert user

INSERT INTO users (publicId,name,username,password) 
VALUES ('randomID','maria.ameer',maria','ameer','password',1234567);

-- get all users

SELECT * FROM users;