function sum(arr) {
    let total = 0;
    for (let value of arr) {
        if (typeof value === 'number') {
            total += value;
        }
    }
    return total;
}
console.log(sum([1, 2, 3, 4, 5, 6, 'A']));