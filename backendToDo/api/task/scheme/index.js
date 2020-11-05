const Joi = require('joi')

const getTaskFromUserScheme = {
  params: {
    userId: Joi.string()
  }
}

const saveTaskFromUser = {
  body: {
    user_id: Joi.number().required(),
    task: Joi.string().required()
  }
}

module.exports = {
  getTaskFromUserScheme,
  saveTaskFromUser
}