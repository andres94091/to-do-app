import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskList from './components/TaskList';

ReactDOM.render(
  // set to user 1
  <TaskList user= {1}/>,
  document.getElementById('root')
);

