// Write a function, reverse that takes a string and returns another string with the characters 
// in reverse order.

function reverse(str) {
    let result = '';
    for (let i = 1; i <= str.length; i++) { // (let i = str.length - 1; i <= 0; i--)
        result += str[str.length-i]; // result += str[i]
    }
    return result;
}

console.log(reverse("fish"))
console.log(reverse('good morning'))
