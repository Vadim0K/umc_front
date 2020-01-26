
const taskAdd = (taskId, taskText) => {
  return {
    type: 'TASK_ADD',
    payload: {
      taskId,
      taskText,
    },
  };
};

const taskDelete = (taskId) => {
  return {
    type: 'TASK_DELETE',
    payload: taskId,
  };
};

const taskMarkDone = (taskId) => {
  return {
    type: 'TASK_MARK_DONE',
    payload: taskId,
  };
};

export {
  taskAdd,
  taskDelete,
  taskMarkDone,
};
