const userId = 1;

const taskId = 1;

const statusFilter = true;

const statusFilterRandom = 'RandomString';

const getUsersAndCountTaskQuery = 'select *  from get_count_task_per_user()';

const getUsersAndCountTask = {
  rows: [
    {
      id: 1,
      name: 'Andres Castro',
      task_per_user: 5,
    },
    {
      id: 2,
      name: 'Pepito Perez',
      task_per_user: 7,
    },
    {
      id: 3,
      name: 'User 3',
      task_per_user: 3,
    },
  ],
};

const getUser = [
  {
    id: 1,
    name: 'Andres Castro',
  },
];

const getTaskFromUserQuery =
  'select *  from get_task_and_users(1, false, false)';

const getTaskFromUserQueryFilter =
  'select *  from get_task_and_users(1, true, true)';

const getTaskFromUser = {
  rows: [
    {
      id: 1,
      task: 'buy eggs',
      status: false,
      name: 'Andres Castro',
    },
    {
      id: 2,
      task: 'read book',
      status: false,
      name: 'Andres Castro',
    },
  ],
};

const saveTaskInput = {
  task: 'save a task',
};

const saveTaskModelOutput = [
  {
    id: 14,
    task: 'do lunch',
    status: false,
    user_id: 1,
  },
];

const updateTaskInput = {
  status: false,
};

const checkIdTask = [{ id: 1, task: 'buy eggs', status: true, user_id: 1 }];

const updateTaskModelOutput = [
  { id: 1, task: 'buy eggs', status: true, user_id: 1 },
];

module.exports = {
  userId,
  taskId,
  getUsersAndCountTaskQuery,
  getUsersAndCountTask,
  getUser,
  getTaskFromUserQuery,
  getTaskFromUserQueryFilter,
  getTaskFromUser,
  saveTaskInput,
  saveTaskModelOutput,
  statusFilter,
  statusFilterRandom,
  updateTaskInput,
  checkIdTask,
  updateTaskModelOutput,
};
