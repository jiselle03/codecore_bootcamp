const countries = ['Taiwan', 'Philippines', 'United States', 'Canada', 'Yemen', 'South Korea', 'Japan', 'South Africa', 'Philippines', 'India']

// Assign a value to 'module.exports' to make it available to other JavaScript files in your node project
// a 'module.exports' line makes this 'module'

module.exports = countries;

// To access the countries array from another file, use the 'require' function:
// const countries = require(<path-to-countries>);