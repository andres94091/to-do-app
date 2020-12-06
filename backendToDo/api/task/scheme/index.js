const Joi = require('joi');

const saveTaskFromUser = {
  body: {
    task: Joi.string().required(),
  },
};

module.exports = {
  saveTaskFromUser,
};
