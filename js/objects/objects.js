// Objects

const car = {
    name: 'lisa',
    brand: 'Tesla',
    makeYear: '2020',
    model: 'roadster',
    'make year': 2021
};

// Use unique keys or else the last one will override the previous
// Keys and properties used interchangeably

// Get the value associated to key:
// 1) Dot operator

car.name // 'lisa'
car.brand // 'Tesla'
car.make.year // error

// 2) Square bracket notation
car['name']; // 'lisa'
car['brand']; // 'Tesla'
car['make year'] // 2021

const a = 'make';
const b = 'year';
car[a + ' ' + b]; // 2021

// Selecting a key that doesn't exist
car.color; // undefined

// Adding key values to an object

car.color = 'red';
car.color; // red
