-- 1️⃣ Enum types
CREATE TYPE gender_enum AS ENUM ('male', 'female', 'rather not say');
CREATE TYPE package_enum AS ENUM ('FREEMIUM','OFFER_1', 'OFFER_2', 'OFFER_3', 'OFFER_4');
CREATE TYPE currency_enum AS ENUM ('USD', 'NGN');
CREATE TYPE preorder_status_enum AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'CANCELLED');


-- 2️⃣ Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    gender gender_enum NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);


-- 3️⃣ Packages table
CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    code package_enum NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    launch_price NUMERIC(12, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);


-- 4️⃣ User Preorders table
CREATE TABLE user_preorders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    package_code package_enum NOT NULL REFERENCES packages(code),
    package_price NUMERIC(12, 2) NOT NULL,
    status preorder_status_enum NOT NULL DEFAULT 'PENDING',
    payment_reference VARCHAR(255),
    preorder_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,

    CONSTRAINT unique_user_preorder UNIQUE (user_id)
);
-- 5️⃣ Insert initial package data
INSERT INTO packages (code, name, description, launch_price) VALUES
('FREEMIUM', 'Free', 'Free', 0),
('OFFER_1', '$6.7/12mnth $6.7/M after launch', 'Basic features for personal use', 80.40),
('OFFER_2', '$30/12mnth $30/M after launch', 'Advanced features for professionals', 360.00),
('OFFER_3', '$3.5/12mnths $3.5/M after launch', 'Comprehensive features for businesses', 42.00),
('OFFER_4', '$62.9/12mths $62.9/M after launch', 'All features for large enterprises', 754.80);