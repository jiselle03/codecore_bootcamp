function fetch() {
    return 'bone';
}

const dog = {
    name: "Lisa",
    age: 5,
    bark: function() {
        return "Bork";
    }, // trailing comma
    fetch: fetch,
};

dog.swim = function() {
    return 'sploosh';
}

console.log(dog.bark());
console.log(dog.fetch());
console.log(dog.swim());