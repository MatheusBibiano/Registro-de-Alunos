CREATE SCHEMA register;

USE register;

CREATE TABLE student (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    filename varchar(50) NOT NULL,
    name varchar(50) NOT NULL,
    street varchar(50) NOT NULL,
    district varchar(50) NOT NULL,
    number int NOT NULL,
    cep varchar(9) NOT NULL
);
