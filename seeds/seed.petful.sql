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
    'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg', 
    'Orange bengal cat with black stripes lounging on concrete.',
    'Pixie',
    'Female',
    4,
    'Tabby',
    'Lived under the bridge'),
    (3,
    'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 
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
    'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
    'A smiling golden-brown golden retreiver listening to music.',
    'Luna',
    'Female',
    2,
    'Black Lab Mix',
    'We do not know how she ended up here but something tells us she will find a nice home soon'),
    (3,
    'http://www.touchwoodpr.com/blog/wp-content/uploads/2018/02/Screen-Shot-2018-02-23-at-11.53.52-AM-399x408.png',
    'A smiling golden-brown golden retreiver listening to music.',
    'Bruiser',
    'Male',
    5,
    'Little Dog',
    'Owners passed away');
    