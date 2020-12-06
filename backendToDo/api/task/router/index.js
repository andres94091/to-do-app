const expressJoi = require('express-joi-validator');
const express = require('express');
const router = express.Router();

const taskController = require('../controller/');
const scheme = require('../scheme');

/**
 * endpoint to get all task for a user
 */
router.get('/users/:userId', (req, res) => {
  taskController.getTaskFromUserResponse(res, req.params);
});

/**
 * endpoint for save a task given a user
 */
router.post(
  '/users/:userId/tasks',
  expressJoi(scheme.saveTaskFromUser),
  (req, res) => {
    taskController.saveTaskFromUserResponse(res, {
      ...req.params,
      ...req.body,
    });
  },
);

/**
 * endpoint to update a task
 */
router.patch('/users/:userId/tasks/:taskId', (req, res) => {
  taskController.updateStatusResponse(res, { ...req.params, ...req.body });
});

module.exports = router;
