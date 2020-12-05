const taskModel = require('../model/');
const utils = require('../../../config/utils');

const getTaskFromUser = async (userId) => {
  const taskData = await taskModel.getTaskFromUser(Number(userId));
  return taskData.sort((x, y) =>
    x.status === y.status ? 0 : x.status ? 1 : -1,
  );
};

const getTaskFromUserResponse = async (res, data) => {
  const taskData = await getTaskFromUser(data.userId);
  utils.buildResponse(res, 200, taskData, 'task from user');
};

const saveTaskFromUser = async (data) => {
  try {
    const insertStatus = await taskModel.saveTaskFromUser(data);
    return insertStatus;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const saveTaskFromUserResponse = async (res, data) => {
  try {
    const insertStatus = await saveTaskFromUser(data);
    utils.buildResponse(res, 201, insertStatus, 'task saved');
  } catch (err) {
    utils.buildResponse(res, 500, err, err.detail);
  }
};

const updateStatusTask = async ({ taskId, status }) => {
  try {
    const updateStatus = await taskModel.updateTask(Number(taskId), status);
    return updateStatus;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateStatusResponse = async (res, data) => {
  try {
    const updateStatus = await updateStatusTask(data);
    utils.buildResponse(res, 200, updateStatus, 'task updated');
  } catch (err) {
    utils.buildResponse(res, 500, err, err);
  }
};

module.exports = {
  getTaskFromUserResponse,
  saveTaskFromUserResponse,
  updateStatusResponse,
};
