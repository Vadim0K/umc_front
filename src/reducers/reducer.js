import uuidv4 from 'uuid/v4';// Удалити переставлячи то в AddForm

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      text: 'Clean the bar',
      solved: false,
    },
    {
      id: uuidv4(),
      text: 'Fill the chocolate',
      solved: true,
    },
    {
      id: uuidv4(),
      text: 'Check tea',
      solved: false,
    },
    {
      id: uuidv4(),
      text: 'Clean terrace',
      solved: false,
    },
  ],
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {...state, counter: state.counter + 1};
    case 'DEC':
      return {...state, counter: state.counter - 1};
    case 'TASK_DELETE': {
      const index = state.tasks.findIndex(({id}) => id === action.payload);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index+1),
        ],
      };
    }
    case 'TASK_MARK_DONE': {
      const item = state.tasks.find(({id}) => id === action.payload);
      const index = state.tasks.findIndex(({id}) => id === action.payload);
      item.solved = !item.solved;
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          item,
          ...state.tasks.slice(index+1),
        ],
      };
    }

    case 'TASK_ADD': {
      const id = action.payload.taskId;
      const text = action.payload.taskText;
      console.log(id, text);
      if (text) {
        return {
            ...state,
          tasks: [
            ...state.tasks,
            {id: id, text: text, solved: false},
          ]
        };
      }
      return state;
    }

    default:
      return state;
  }
}

export default reducer;
