const { parameters } = require('../config');
const knexConfig = require('../knexfile')[parameters.env];
module.exports = require('knex')(knexConfig);
