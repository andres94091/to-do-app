
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Andres Castro'},
        {id: 2, name: 'Pepito Perez'},
        {id: 3, name: 'User 3'}
      ]);
    });
};
