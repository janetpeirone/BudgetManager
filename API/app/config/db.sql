CREATE DATABASE budget_admin_db;

USE budget_admin_db;

-- Users table
CREATE TABLE users(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL   
);

-- Monetary operations table
CREATE TABLE monetary_operations(
    id INT(11) NOT NULL,
    concept VARCHAR(100) NOT NULL,
    amount DECIMAL(15.4) NOT NULL,
    op_date DATE NOT NULL,
    op_type VARCHAR(20) NOT NULL,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE monetary_operations
    modify id INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE users
    modify email VARCHAR(50) NOT NULL UNIQUE;

DESCRIBE users;
DESCRIBE monetary_operations;