import React from 'react';
import {useDispatch} from 'react-redux';

import {taskDelete, taskMarkDone} from '../../actions';

import './task-list-item.css';

const TaskListItem = ({task}) => {
  const dispatch = useDispatch();
  const {id, text, solved} = task;

  let className = 'task-list-item';
  if (solved) {
    className += ' done';
  }

  return (
    <span className={className}>

      <span onClick={(() => dispatch(taskMarkDone(id)))} className="task-list-item-label">{text}</span>

      <button type="button"
        className="btn btn-outline-danger task-list-item-button"
        onClick={(() => dispatch(taskDelete(id)))}>
        <i className="fa fa-trash-o"></i>
      </button>

    </span>

  );
};

export default TaskListItem;
