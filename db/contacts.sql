# schema.sql
CREATE database contacts_book;
USE contacts_book;

CREATE TABLE contacts (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
);

# add seed data into TABLE

INSERT INTO contacts (first_name, last_name, location) VALUES('Auston', 'Matthews', 'Toronto');
INSERT INTO contacts (first_name, last_name, location) VALUES('Mitch', 'Marner', 'Toronto');
INSERT INTO contacts (first_name, last_name, location) VALUES('Zach', 'Hyman', 'Toronto');