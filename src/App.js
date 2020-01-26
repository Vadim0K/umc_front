import React from 'react';
import TaskHeader from './components/task-header';
import TaskAddForm from './components/task-add-form';
import TaskList from './components/task-list';

import './App.css';

function App() {
  return (
    <div className="App">
      <TaskHeader/>
      <TaskAddForm/>
      <TaskList/>
    </div>
  );
}

export default App;
