const { host, user, password, database } = require('../config').postgress

const knex = require('knex')({
  client: 'pg',
  connection: {
    host,
    user,
    password,
    database,
  },
  pool:{
    min:0, 
    max: 10,
  }
});

module.exports = knex