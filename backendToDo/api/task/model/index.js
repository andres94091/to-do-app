const knex = require('../../../knex/knex');

const getTaskFromUser = async (userId) => {
  try {
    const data = await knex.raw(`select *  from get_task_and_users(${userId})`);
    return data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getCountTaskPerUser = async () => {
  try {
    const data = await knex.raw(`select *  from get_count_task_per_user()`);
    return data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const saveTaskFromUser = async (task) => {
  try {
    const insertStatus = await knex('tasks').insert(task);
    return insertStatus;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateTask = async (taskId, status) => {
  try {
    const taskReg = await knex('tasks').where('id', taskId);
    if (!taskReg) {
      throw 'select id do not exist';
    }
    const updateReg = await knex('tasks')
      .update('status', status)
      .where('id', taskId);
    return updateReg;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getTaskFromUser,
  getCountTaskPerUser,
  saveTaskFromUser,
  updateTask,
};
