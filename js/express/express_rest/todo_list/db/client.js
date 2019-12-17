// Load configuration of knex
const config = require('../knexfile');

// Load knex module
const knex = require('knex');

// Export connection with development configuration
module.exports = knex(config.development);