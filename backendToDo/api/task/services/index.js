const {
  getTaskFromUser,
  getCountTaskPerUser,
  getTaskFromUserFiltered,
  saveTaskFromUser,
  updateTask,
} = require('../model');

const getCountTaskPerUserService = async () => {
  const taskCount = await getCountTaskPerUser();
  return taskCount;
};

const getTaskFromUserService = async (userId) => {
  const taskData = await getTaskFromUser(Number(userId));
  return taskData.sort((x, y) =>
    x.status === y.status ? 0 : x.status ? 1 : -1,
  );
};

const getTaskFromUserFilteredService = async ({ userId, status }) => {
  const taskData = await getTaskFromUserFiltered(Number(userId), status);
  return taskData.sort((x, y) =>
    x.status === y.status ? 0 : x.status ? 1 : -1,
  );
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
  getTaskFromUserFilteredService,
  saveTaskFromUserService,
  updateStatusTaskService,
};
