import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {taskAdd} from '../../actions';

import uuidv4 from 'uuid/v4';

import './task-add-form.css';


const TaskAddForm = () => {
  const dispatch = useDispatch();

  const [taskText, setLabel] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(taskText);
    const id = uuidv4();
    dispatch(taskAdd(id, taskText));
    setLabel('');
  };

  const onLabelChange = (e) =>{
    setLabel(e.target.value);
  };

  return (
    <form
      className="task-add-form d-flex"
      onSubmit={onSubmit}>

      <input type="text"
        className="form-control new-task-label"
        value={taskText}
        onChange={onLabelChange}
        placeholder="What needs to be done?"/>

      <button type="submit"
        className="add-button">Add</button>
    </form>
  );
};

export default TaskAddForm;
