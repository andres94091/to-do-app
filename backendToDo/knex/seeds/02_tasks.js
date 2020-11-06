
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task: 'buy eggs', status: false, user_id: 1},
        {task: 'read book', status: false, user_id: 1},
        {task: 'make dinner', status: true, user_id: 1}
      ]);
    });
};
