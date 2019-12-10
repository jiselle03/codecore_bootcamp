const StringHelpers = {
    capitalize(str) {
        return str[0].toUpperCase() + str.slice(1)},
    titleize(str) {
        let titleArr = str.split(' ');
        titleArr.forEach(word => {word[0].toUpperCase()});
        return titleArr.join(' ');
    },
};

module.exports = StringHelpers;