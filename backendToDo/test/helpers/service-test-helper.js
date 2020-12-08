const userId = 1;

const getUsersCountModelResponse = [
  {
    id: 1,
    name: 'Andres Castro',
    task_per_user: 3,
  },
  {
    id: 2,
    name: 'Pepito Perez',
    task_per_user: 3,
  },
  {
    id: 3,
    name: 'User 3',
    task_per_user: 3,
  },
];

const getUserModelResponse = {
  id: 1,
  name: 'Andres Castro',
};

const getUserTaskModelResponse = [
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
  {
    id: 10,
    task: 'do lunch',
    status: false,
    name: 'Andres Castro',
  },
  {
    id: 11,
    task: 'do lunch',
    status: false,
    name: 'Andres Castro',
  },
  {
    id: 3,
    task: 'make dinner',
    status: true,
    name: 'Andres Castro',
  },
];

const newTask = { userId, task: 'task test' };

const taskSaved = { id: 12, task: 'do lunch', status: false, user_id: 1 };

const updateTaskInput = { id: 12, status: true };

const updateTaskOutput = { id: 1, task: 'buy eggs', status: true, user_id: 1 };

module.exports = {
  userId,
  getUsersCountModelResponse,
  getUserTaskModelResponse,
  getUserModelResponse,
  newTask,
  taskSaved,
  updateTaskInput,
  updateTaskOutput,
};
