function toArray(obj) {
    const arr = [];
    for (let key in obj) {
        const tempArr = [key, obj[key]];
        arr.push(tempArr);
    }
    return arr;
}

console.log(toArray({a: 1, b: 2, c: 3}));