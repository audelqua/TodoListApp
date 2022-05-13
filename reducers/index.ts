import { combineReducers } from "redux";

interface TodoList {
  tasks: Array;
}

const initialState: TodoList = {
  tasks: []
}

const todoList = (state: TodoList = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      return { ...state, tasks: [ ...state.tasks, action.payload ] }
    case 'SET_ALL_TASKS':
      return { tasks: [ ...action.payload ] }
    case 'UPDATE_TASK':
      let targetTask = state.tasks.map(task => {
        if(task.createdAt === action.payload.createdAt) {
          return action.payload
        }else{
          return task
        }
      })
      return { ...state, tasks: targetTask }
    default:
      return state;
  }
};

export default combineReducers({
  todoList,
})