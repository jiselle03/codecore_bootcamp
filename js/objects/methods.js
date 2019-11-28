// Object Methords

const car = {
    name: 'lisa',
    brand: 'Tesla',
    makeYear: '2020',
    model: 'roadster',
    'make year': 2021
};

const misc = {
    doors: 4,
    fuel: 'electricity',
    name: 'Tony'
}

// To get all keys of an object
// Object.keys(obj)
Object.keys(car); // ['name', 'brand', 'makeYear, 'model', 'make year']
// will return as an array

// Returns an array containing all the values of an object
// Object.values(obj)
Object.values(car); // ['lisa', 'Tesla', 2020, 'roadster', 2021]

// Merges objects together
// Object.assign(obj)
Object.assign(car, misc); // will override earlier value if same keys
/* 
{
  name: 'Tony',
  brand: 'Tesla',
  makeYear: '2020',
  model: 'roadster',
  'make year': 2021,
  doors: 4,
  fuel: 'electricity'
}
*/

// We can use Object.assign with an empty object to copy all the keys and values 
// of an existing object to a new one.
const carCopy = Object.assign({}, car);
carCopy.name = 'Brad'
console.log(carCopy); 