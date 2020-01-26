import React from 'react';
import {useSelector} from 'react-redux';
import TaskListItem from '../task-list-item';

import './task-list.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (<ul className="task-list list-group list-group-flush">
    {
      tasks.map((task) =>{
        return (
          <li className="list-group-item" key={task.id}>
            <TaskListItem task={task}/>
          </li>
        );
      })
    }
  </ul>
  );
};

export default TaskList;
