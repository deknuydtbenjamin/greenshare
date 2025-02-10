CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(role_id) REFERENCES role(id)
);
CREATE TABLE category(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE plante (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) NOT NULL UNIQUE,
  picture VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  watering TINYINT UNSIGNED DEFAULT NULL,
  plant_exhibition TINYINT UNSIGNED DEFAULT NULL,
  category_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(category_id) REFERENCES category(id),
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE commentary(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  com_content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  plante_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(plante_id) REFERENCES plante(id),
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);





