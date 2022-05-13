import { combineReducers } from "redux";
import { newTaskGenerator } from '../helpers'

interface TodoList {
  tasks: Array;
}

const initialState: TodoList = {
  tasks: []
}

const todoList = (state: TodoList = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      const newTask = newTaskGenerator(action.payload)
      return { ...state, tasks: [ ...state.tasks, newTask ] }
    default:
      return state;
  }
};

export default combineReducers({
  todoList,
})