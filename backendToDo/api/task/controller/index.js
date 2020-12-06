const {
  getTaskFromUserService,
  getCountTaskPerUserService,
  saveTaskFromUserService,
  updateStatusTaskService,
} = require('../services');
const utils = require('../../../config/utils');

const getTaskFromUserResponse = async (res, data) => {
  const taskData = await getTaskFromUserService(data.userId);
  utils.buildResponse(res, 200, taskData, 'task from user');
};

const getCountTaskPerUserResponse = async (res) => {
  const taskCount = await getCountTaskPerUserService();
  utils.buildResponse(res, 200, taskCount, 'count of task per user');
};

const saveTaskFromUserResponse = async (res, data) => {
  try {
    const insertStatus = await saveTaskFromUserService(data);
    utils.buildResponse(res, 201, insertStatus, 'task saved');
  } catch (err) {
    utils.buildResponse(res, 500, err, err.detail);
  }
};

const updateStatusResponse = async (res, data) => {
  try {
    const updateStatus = await updateStatusTaskService(data);
    utils.buildResponse(res, 200, updateStatus, 'task updated');
  } catch (err) {
    utils.buildResponse(res, 500, err, err);
  }
};

module.exports = {
  getTaskFromUserResponse,
  getCountTaskPerUserResponse,
  saveTaskFromUserResponse,
  updateStatusResponse,
};
