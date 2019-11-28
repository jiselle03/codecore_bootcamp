// Constructors
// are just functions that can be used to generate objects

// Prototypes
// this keyword
// inheritance
// class syntax for constructors

// Constructor
function Guest(firstname, lastname, email, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.full_name = function() {
        return `${this.firstname} ${this.lastname}`
    }
}

// Instances
const guest1 = new Guest('Alan', 'Matthews', 'alan@gmail.com', '778 777 0000');
const guest2 = new Guest('Roman', 'John', 'romanjohn@gmail.com', '778 777 1100');

// console.log('guest1: ', guest1);
// console.log('guest2: ', guest2);

function Dog(name, age) {
    this.name = name;
    this.age = age;
}

// Create an instance of a Doggo with the 'new keyword

const sonicSam = new Dog('Sonic Sam', 5);

// console.log(sonicSam)

const counter = {
    currentCount: 0,
    step: 1,
    set(n) {
        this.currentCount = n
        return this;
    },
    inc() {
        this.currentCount += this.step;
        return this;
    },
    dec() {
        this.currentCount -= this.step;
        return this;
    },
    now() {
        console.log(this.currentCount);
    },
    setStep(n) {
        this.step = n;
        return this;
    },
};

// Demo: Counter

// function Counter(currentCount, step) {
//     this.currentCount = currentCount;
//     this.step = step;
//     this.set = function set(n) {
//         return this.currentCount = n;
//     };
//     this.inc = function inc() {
//         return this.currentCount += this.step;
//     };
//     this.dec = function dec() {
//         return this.currentCount -= this.step;
//     };
//     this.now = function now() {
//         console.log(this.currentCount);
//     };
//     this.setStep = function setStep(n) {
//         return this.step = n;
//     };
// }

// const counterInstance1 = new Counter(0, 1);
// console.log(counterInstance1);
    
// const counterInstance2 = new Counter(100, 20);
// console.log(counterInstance2);

// Using prototypes

function Counter(currentCount, step) {
    this.currentCount = currentCount;
    this.step = step;
}

Counter.prototype.set = function set(n) {
    this.currentCount = n;
};
Counter.prototype.inc = function inc() {
    this.currentCount += this.step;
};
Counter.prototype.dec = function dec() {
    this.currentCount -= this.step;
};
Counter.prototype.now = function now() {
    return this.currentCount;
};
Counter.prototype.setStep = function setStep(n) {
    this.step = n;
};

const counterInstance1 = new Counter(0, 1);
// console.log(counterInstance1);
    
const counterInstance2 = new Counter(100, 20);
// console.log(counterInstance2);


// Functional inheritance

// function Doggo(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Doggo.prototype.bark = function() {
//     return `woof woof`
// }

// function DoggoFighter(name, age, specialAbility) {
//     this.name = name;
//     this.age = age;
//     this.specialAbiliy = specialAbility;
// }

// Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

// DoggoFighter.prototype.fight = function() {
//     const contestants = [this.name, 'Pixy', 'Rufus'];
//     const winner = contestants[Math.floor(Math.random() * 3)];
//     return `${winner} won`;
// }

// const lumberjackLawrence = new DoggoFighter('Lumberjack Lawrence', 9, 'chucks');

// You cannot have 2 constructors for a class
// This will result in an error


// Classical inheritance

class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bark() {
        return `${this.name} barks 'Bork bork bork'`;
    }

    sleep() {
        return 'Zzzzzzz....';
    }
}

const moneybagsMichaels = new Doggo('Moneybags Michaels', 5);

// Cannot do this with classes:
// const otherDoggo = Doggo('name', 2);

// 'Child' inherits from 'Parent'

class DoggoFighter extends Doggo {
    constructor(name, specialAbility) {
        super();
        this.name = name;
        this.age = age;
        this.specialAbility = specialAbility;
    }

    fight() {
        const contestants = [this.name, 'Pixy', 'Rufus']
        const winner = contestants[Math.floor(Math.random() * 3)];
        return `${winner} won.`
    }
}

const doggo1 = new DoggoFighter('Jimmy', 7, 'Fly');



class Counter {
    constructor(currentCount, step) {
        this.currentCount = currentCount;
        this.step = step;
    }

    set(n) {
        this.currentCount = n;
    }

    inc() {
        this.currentCount += this.step;
    }

    dec() {
        this.currentCount -= this.step;
    }

    now() {
        return this.currentCount;
    }

    setStep(n) {
        this.step = n;
    }
}

const counter1 = new Counter(20, 5);


const can = {
    greetings: 'Hi',
    touchThis() {
        return this;
    },
    whatsMyThis: window.whatsMyThis,
}

console.log('can.touchThis(): ', can.touchThis());
console.log('can.whatsMyThis: ', can.whatsMyThis());
console.log('whatsMyThis(): ', whatsmyThis());

// We say that 'this' is dynamic
// In other words, it is not determined by its placement in the code but instead by where it is called