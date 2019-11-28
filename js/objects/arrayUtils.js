const arrayUtils = {
    last: function(arr) {
        return arr[arr.length - 1];
    },
    first: function(arr) {
        return arr[0];
    },
    take: function(arr, n) {
        return arr.splice(0, n);
    }
}

console.log(arrayUtils.take([1, 2, 3, 4], 2));

const twoDArray = [['a', 1], ['b', 2], ['c', 3]];

arrayUtils.toObject = function toObject(matrix) {
    const obj = {};
    for (let arr of matrix) {
        const key = arr[0];
        const value = arr[1];
        obj[key] = value;
    }
    return obj;
}

console.log(arrayUtils);
console.log(arrayUtils.toObject(twoDArray));