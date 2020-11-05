const { host, user, password, database } = require('../config').postgress

// function callbackKnex (coon, done){
//   conn.query('SET timezone="UTC";', function (err) {
//     if (err) {
//       done(err, conn);
//     } else {
//       conn.query('SELECT set_limit(0.01);', function (err) {
//         done(err, conn);
//       });
//     }
//   });
// }

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
    // afterCreate: callbackKnex
  }
});

module.exports = knex