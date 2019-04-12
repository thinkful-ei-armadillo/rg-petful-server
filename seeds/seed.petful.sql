-- psql -U postgres -d petful -f seeds/seed.petful.sql

TRUNCATE cats, dogs;

INSERT INTO cats
    ( id, imageURL, imageDescription, name, sex, age, breed, story )
VALUES
    (1,
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    'Orange bengal cat with black stripes lounging on concrete.',
    'Fluffy',
    'Female',
    2,
    'Bengal',
    'Thrown on the street');

INSERT INTO dogs
    ( id, imageURL, imageDescription, name, sex, age, breed, story )
VALUES
    (1,
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    'A smiling golden-brown golden retreiver listening to music.',
    'Zeus',
    'Male',
    3,
    'Golden Retriever',
    'Owner Passed away');