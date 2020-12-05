exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task: 'buy eggs', status: false, user_id: 1 },
        { task: 'read book', status: false, user_id: 1 },
        { task: 'make dinner', status: true, user_id: 1 },
        { task: 'task 1', status: false, user_id: 2 },
        { task: 'task 2', status: true, user_id: 2 },
        { task: 'task 3', status: true, user_id: 2 },
        { task: 'task A', status: true, user_id: 3 },
        { task: 'task B', status: true, user_id: 3 },
        { task: 'task C', status: true, user_id: 3 },
      ]);
    });
};
