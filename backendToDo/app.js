const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// routers
const taskRouter = require('./api/task/router/');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, authorization, token_refresh',
  );

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use('/api', taskRouter);

// Custom 404 route not found handler
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'route does not exist',
  });
});

module.exports = app;
