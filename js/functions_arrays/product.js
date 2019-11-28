function product(arr) {
    let total = 1;
    for (let value of arr) {
        if (typeof value === 'number') {
            total *= value;
        }
    }
    return total;
}

console.log(product([1, 2, 3, 4, 5, 'A']));