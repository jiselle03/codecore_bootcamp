const twoDArray = [['a', 1], ['b', 2], ['c', 3]];

function toObject(matrix) {
    const obj = {};
    for (let arr of matrix) {
        const key = arr[0];
        const value = arr[1];
        obj[key] = value;
    }
    return obj;
}

console.log(toObject(twoDArray));