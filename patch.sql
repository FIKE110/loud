DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'gender_enum') THEN
    CREATE TYPE gender_enum AS ENUM ('male', 'female', 'rather not say');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'package_enum') THEN
    CREATE TYPE package_enum AS ENUM ('FREEMIUM','OFFER_1', 'OFFER_2', 'OFFER_3', 'OFFER_4');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'currency_enum') THEN
    CREATE TYPE currency_enum AS ENUM ('USD', 'NGN');
  END IF;

  IF NOT EXISTS (SELECT 1  FROM pg_type WHERE typname = 'preorder_status_enum') THEN
    CREATE TYPE preorder_status_enum AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'CANCELLED');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  gender gender_enum NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS packages (
  id SERIAL PRIMARY KEY,
  code package_enum NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  launch_price INTEGER NOT NULL, -- cents (e.g. 8040 = $80.40)
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS user_preorders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  package_code package_enum NOT NULL REFERENCES packages(code),
  package_price INTEGER NOT NULL, -- cents
  currency currency_enum NOT NULL DEFAULT 'USD',
  status preorder_status_enum NOT NULL DEFAULT 'PENDING',
  payment_reference VARCHAR(255),
  preorder_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT unique_user_preorder UNIQUE (user_id)
);

INSERT INTO packages (code, name, description, launch_price)
VALUES
('FREEMIUM', 'Free', 'Free', 0),
  ('OFFER_1', '$6.7/12mnth $6.7/M after launch', 'Basic features for personal use', 8040),
  ('OFFER_2', '$30/12mnth $30/M after launch', 'Advanced features for professionals', 36000),
  ('OFFER_3', '$3.5/12mnths $3.5/M after launch', 'Comprehensive features for businesses', 4200),
('OFFER_4', '$62.9/12mths $62.9/M after launch', 'All features for large enterprises', 75480)
ON CONFLICT (code) DO NOTHING;

