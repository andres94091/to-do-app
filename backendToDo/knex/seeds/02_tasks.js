
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'buy eggs', status: false, user_id: 1},
        {id: 2, task: 'read book', status: false, user_id: 1},
        {id: 3, task: 'make dinner', status: true, user_id: 1}
      ]);
    });
};
