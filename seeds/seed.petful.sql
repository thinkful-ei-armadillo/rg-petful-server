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
    'Thrown on the street'),
    (2,
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    'Orange bengal cat with black stripes lounging on concrete.',
    'Pixie',
    'Female',
    4,
    'Tabby',
    'Lived under the bridge'),
    (3,
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    'Orange bengal cat with black stripes lounging on concrete.',
    'Giannis',
    'Male',
    34,
    'Bengal',
    'Greek Freak');

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
    'Owner Passed away'),
    (2,
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    'A smiling golden-brown golden retreiver listening to music.',
    'Luna',
    'Female',
    2,
    'Black Lab Mix',
    'We do not know how she ended up here but something tells us she will find a nice home soon'),
    (3,
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    'A smiling golden-brown golden retreiver listening to music.',
    'Bruiser',
    'Male',
    5,
    'Little Dog',
    'Owners passed away');
    