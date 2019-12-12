// Set the environment
const environment = process.env.NODE_ENV || 'development';
// Load exported configs from knexfile.js
const confic = require('../knexfile');
// Grab the environment that you want to connect to
const environmentConfig = config[environment];
// Require knex
const knex = require('knex');
// Pass the environment you want to connect to
const connection = knex(environmentConfig);

// Export the connection
module.exports = connection;