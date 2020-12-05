const Joi = require('joi');

const saveTaskFromUser = {
  body: {
    user_id: Joi.number().required(),
    task: Joi.string().required(),
  },
};

module.exports = {
  saveTaskFromUser,
};
