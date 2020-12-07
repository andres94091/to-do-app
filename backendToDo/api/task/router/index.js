const expressJoi = require('express-joi-validator');
const express = require('express');
const router = express.Router();

const {
  getCountTaskPerUserResponse,
  getTaskFromUserResponse,
  getTaskFromUserFilteredResponse,
  saveTaskFromUserResponse,
  updateStatusResponse,
} = require('../controller/');
const scheme = require('../scheme');

/**
 * endpoint to get a count of all task per user
 */
router.get('/users', (req, res) => {
  getCountTaskPerUserResponse(res);
});

/**
 * endpoint to get all task for a user
 */
router.get('/users/:userId/tasks', (req, res) => {
  if (req.query.status) {
    getTaskFromUserFilteredResponse(res, { ...req.params, ...req.query });
  } else {
    getTaskFromUserResponse(res, req.params);
  }
});

/**
 * endpoint for save a task given a user
 */
router.post(
  '/users/:userId/tasks',
  expressJoi(scheme.saveTaskFromUser),
  (req, res) => {
    saveTaskFromUserResponse(res, {
      ...req.params,
      ...req.body,
    });
  },
);

/**
 * endpoint to update a task
 */
router.patch('/users/:userId/tasks/:taskId', (req, res) => {
  updateStatusResponse(res, { ...req.params, ...req.body });
});

module.exports = router;
