// Vectors are a representation of movement in space. That is 2 to 3 distances in x, y and/or z axes. 
// Vectors are very useful when working with graphics, videos and any applications that requires drawing in space.

// Your task is to build a Vector constructor.

// It should support the coordinates: x, y and z.
// It should have 3 prototype methods: plus, minus, magnitude.
// The methods, plus & minus, should return a new Vector (not a plain object or an existing vector) 
// with the correct distances.
// Create a constructor/prototype version and class based version.


// Constructor/prototype version
// function Vector(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
// }

// Vector.prototype.plus = function plus(vector) {
//     return `Vector {x: ${this.x + vector.x}, y: ${this.y + vector.y}, z: ${this.z + vector.z}}`
// };
// Vector.prototype.minus = function minus(vector) {
//     return `Vector {${this.x - vector.x}, ${this.y - vector.y}, ${this.z - vector.z}}`
// };
// Vector.prototype.magnitude = function magnitude() {
//     return Math.sqrt(this.x**2 + this.y**2 + this.z**2)
// };


// Class based version
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    plus(vector) {
        return `Vector {${this.x + vector.x}, ${this.y + vector.y}, ${this.z + vector.z}}`
    }
    minus(vector) {
        return `Vector {${this.x - vector.x}, ${this.y - vector.y}, ${this.z - vector.z}}`
    }
    magnitude() {
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2)
    }
}


let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}

console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}

console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3