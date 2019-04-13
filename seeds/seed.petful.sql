-- psql -U postgres -d petful -f seeds/seed.petful.sql
-- psql -U yjtnsycvhgkyup -d dhjj8ro27g1l0 -f seeds/seed.petful.sql

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
    'https://cdn0.wideopenpets.com/wp-content/uploads/2018/02/AdobeStock_109255057-770x405.jpg',
    'Grey and brown tabby cat laying on its side.',
    'Pixie',
    'Female',
    4,
    'Tabby',
    'Lived under the bridge'),
    (3,
    'https://vetstreet-brightspot.s3.amazonaws.com/45/8a/b631e9c44a148130feea7c99cbc7/aegean-cat-alamy-dykp57-645.jpg', 
    'Brown Aegean cat staring with his green eyes.',
    'Giannis',
    'Male',
    34,
    'Aegean',
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
    'https://pet-net.net/wp-content/uploads/Athena-Black-Lab-Mix-Dog-For-Adoption-in-Ohio-4-1.jpg',
    'A very nice black lab looking up at the camera with her white chin showing.',
    'Luna',
    'Female',
    2,
    'Black Lab Mix',
    'We do not know how she ended up here but something tells us she will find a nice home soon'),
    (3,
    'https://t1.ea.ltmcdn.com/en/razas/1/0/0/img_1_chihuahua_0_600.jpg',
    'A small chihuahua looking at the camera mischeviously.',
    'Bruiser',
    'Male',
    5,
    'Chihuahua',
    'Owners passed away');
    