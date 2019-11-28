

// Create an object named, StringExtras, that contain several utility methods 
// that re-implement some string library methods. 
// You are not allowed to use the existing methods of the same name to implement these.

// It should have a:

// repeat method that duplicates a string n of times.
// leftPad method that adds space to the left of a string until the string is of length n.
// rightPad method like leftPad, but adds spaces to the right of the string.
// pad method like leftPad, but adds spaces to the left & right of the string.
// capitalize method which uppercases the first letter of a string.

let a = 'you';

const stringExtras = {
    repeat(str, n) {
        let newStr = '';
        for (let i = 1; i <= n; i++) {
            newStr += str
        }
        return newStr;
    },
    leftPad: function(str, n) {
        let newStr = '';
        for (let i = 1; i <= n - str.length; i++) {
            newStr += ' '
        }
        return newStr + str;
        
    },
    rightPad: function(str, n) {
        let newStr = '';
        for (let i = 1; i <= n - str.length; i++) {
            newStr += ' '
        }
        return str + newStr;
    },
    pad: function(str, n) {
        let leftStr = '';
        let rightStr = '';
        for (let i = 1; i <= Math.ceil((n - str.length) / 2); i++) {
            leftStr += ' '
        }
        for (let i = 1; i <= Math.floor((n - str.length) / 2); i++) {
            rightStr += ' '
        }
        return leftStr + str + rightStr;
    },
    capitalize: function(str) {
        let newStr = '';
        newStr = str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
            newStr += str[i];
        }
        return newStr;
    },
};

console.log(stringExtras.repeat(a, 3)); // returns 'youyouyou'
console.log(stringExtras.repeat(' ', 6)); // returns '      '
console.log(stringExtras.leftPad(a, 5)); // returns '  you'
console.log(stringExtras.leftPad(a, 1)); // returns 'you'
console.log(stringExtras.leftPad(a, 3)); // returns 'you'
console.log(stringExtras.leftPad(a, 4)); // returns ' you'
console.log(stringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'
console.log(stringExtras.pad(a, 5)); // returns ' you '
console.log(stringExtras.pad(a, 6)); // returns '  you '
console.log(stringExtras.pad(a, 10)); // returns '    you   '
console.log(stringExtras.capitalize(a)); // returns 'You'


// Stretch
// Given what you've learned of prototypes and this, can you think of a way to add all StringExtras methods 
// to Javascript String's prototype?

// Modify StringExtras to act as an extension to String. You may have to do some research to figure this 
// one out. After your modifications, you should be able to do the following:

// Object.assign(String.prototype, StringExtras);

// let a = 'you';

// a.repeat(3); // returns 'youyouyou'
// a.leftPad(4); // returns ' you'
// a.rightPad(5) + 'me'; // returns 'you  me'
// a.capitalize(); // returns 'You'