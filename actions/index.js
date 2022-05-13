
export const addNewTaskAction = (newTask) => (dispatch) => {
    dispatch({
        type: 'ADD_NEW_TASK',
        payload: newTask
    })
}

export const updateTaskAction = (task) => (dispatch) => {
    dispatch({
        type: 'UPDATE_TASK',
        payload: task
    })
}

export const updateFilterAction = (type) => (dispatch) => {
    dispatch({
        type: 'UPDATE_FILTER',
        payload: type
    })
}

export const removeTaskAction = (task) => (dispatch) => {
    dispatch({
        type: 'REMOVE_TASK',
        payload: task
    })
}

export const removeCompletedTasksAction = (tasks) => (dispatch) => {
    dispatch({
        type: 'REMOVE_COMPLETED_TASKS',
        payload: tasks
    })
}

export const setAllTasksAction = (tasks) => (dispatch) => {
    dispatch({
        type: 'SET_ALL_TASKS',
        payload: tasks
    })
}