const {
  getTaskFromUser,
  getCountTaskPerUser,
  saveTaskFromUser,
  updateTask,
} = require('../model');

const getTaskFromUserService = async (userId) => {
  const taskData = await getTaskFromUser(Number(userId));
  return taskData.sort((x, y) =>
    x.status === y.status ? 0 : x.status ? 1 : -1,
  );
};

const getCountTaskPerUserService = async () => {
  const taskCount = await getCountTaskPerUser();
  return taskCount;
};

const saveTaskFromUserService = async ({ userId, task }) => {
  try {
    const insertStatus = await saveTaskFromUser({
      user_id: userId,
      task,
    });
    return insertStatus;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateStatusTaskService = async ({ taskId, status }) => {
  try {
    const updateStatus = await updateTask(Number(taskId), status);
    return updateStatus;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getTaskFromUserService,
  getCountTaskPerUserService,
  saveTaskFromUserService,
  updateStatusTaskService,
};
