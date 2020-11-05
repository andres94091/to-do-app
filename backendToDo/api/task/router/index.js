const expressJoi = require('express-joi-validator');
const express = require('express')
const router = express.Router()

const taskController = require('../controller/')
const scheme = require('../scheme')

router.get('/user/:userId', (req, res) => {
    taskController.getTaskFromUserResponse(res, req.params)
})

router.post('/', expressJoi(scheme.saveTaskFromUser), (req, res) => {
    taskController.saveTaskFromUserResponse(res, req.body)
})

router.patch('/:taskId/status/:status', (req, res) =>{
    taskController.updateStatusResponse(res, req.params)
})

module.exports = router