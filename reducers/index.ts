import { combineReducers } from "redux";

interface TodoList {
  tasks: Array;
  filter: String;
}

const initialState: TodoList = {
  tasks: [],
  filter: "ALL"
}

const todoList = (state: TodoList = initialState, action: any) => {
  let targetTask
  let filteredList

  switch (action.type) {
    case 'ADD_NEW_TASK':
      return { ...state, tasks: [ ...state.tasks, action.payload ] }
    case 'SET_ALL_TASKS':
      return { tasks: [ ...action.payload ] }
    case 'UPDATE_TASK':
      targetTask = state.tasks.map(task => {
        if(task.createdAt === action.payload.createdAt) {
          return action.payload
        }else{
          return task
        }
      })
      return { ...state, tasks: targetTask }
    case 'REMOVE_TASK':
      filteredList = state.tasks.filter(task => task.createdAt !== action.payload.createdAt)
      return { ...state, tasks: filteredList }
    case 'UPDATE_FILTER':
      return { ...state, filter: action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  todoList,
})