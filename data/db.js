const knex = require('knex');

const knexfile = require('../knexfile');


const configOptions = knexfile[process.env.NODE_ENV || 'development'];

module.exports = knex(configOptions);
