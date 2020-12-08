const {
  getTaskFromUser,
  getUser,
  getCountTaskPerUser,
  saveTaskFromUser,
  updateTask,
} = require('../model');

const getCountTaskPerUserService = async () => {
  const taskCount = await getCountTaskPerUser();
  return taskCount;
};

const getUserService = async ({ userId }) => {
  try {
    const user = await getUser(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getTaskFromUserService = async ({ userId, status = null }) => {
  let bandFilter = true;
  if (!['true', 'false'].includes(status)) {
    bandFilter = false;
    status = false;
  }
  const taskData = await getTaskFromUser(Number(userId), status, bandFilter);
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
  getUserService,
  getCountTaskPerUserService,
  saveTaskFromUserService,
  updateStatusTaskService,
};
