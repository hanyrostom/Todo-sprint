DROP DATABASE IF EXISTS todos;

CREATE DATABASE todos;

USE todos;

CREATE TABLE things (
    id int NOT NULL auto_increment,
    task varchar(255) UNIQUE,
    status varchar(255),
    PRIMARY KEY (ID)
)