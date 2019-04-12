DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS dogs;

CREATE TABLE cats (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  imageURL TEXT NOT NULL, 
  imageDescription TEXT NOT NULL,
  name TEXT NOT NULL,
  sex TEXT NOT NULL,
  age INTEGER NOT NULL,
  breed TEXT NOT NULL,
  story TEXT NOT NULL
);

CREATE TABLE dogs (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  imageURL TEXT NOT NULL, 
  imageDescription TEXT NOT NULL,
  name TEXT NOT NULL,
  sex TEXT NOT NULL,
  age INTEGER NOT NULL,
  breed TEXT NOT NULL,
  story TEXT NOT NULL
);