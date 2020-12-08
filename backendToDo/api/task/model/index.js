const db = require('../../../knex');

const getCountTaskPerUser = async () => {
  try {
    const data = await db.raw(`select *  from get_count_task_per_user()`);
    return data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getTaskFromUser = async (userId, status, bandFilter) => {
  try {
    const data = await db.raw(
      `select *  from get_task_and_users(${userId}, ${status}, ${bandFilter})`,
    );
    return data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const saveTaskFromUser = async (task) => {
  try {
    const taskSaved = await db.table('tasks').insert(task).returning('*');
    return {
      ...taskSaved[0],
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateTask = async (taskId, status) => {
  try {
    const taskRegistry = await db.table('tasks').where('id', taskId);
    if (taskRegistry.length === 0) {
      throw 'select id do not exist';
    }
    const updateRegistry = await db
      .table('tasks')
      .update('status', status)
      .where('id', taskId)
      .returning('*');
    return updateRegistry[0];
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
