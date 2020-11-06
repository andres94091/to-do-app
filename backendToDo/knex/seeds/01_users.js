
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Andres Castro'},
        {name: 'Pepito Perez'},
        {name: 'User 3'}
      ]);
    });
};
