
export const addNewTaskAction = newTask => (dispatch, getState) => {
    dispatch({
        type: 'ADD_NEW_TASK',
        payload: newTask
    })
}

export const updateTaskAction = task => (dispatch, getState) => {
    dispatch({
        type: 'UPDATE_TASK',
        payload: task
    })
}

export const setAllTasksAction = tasks => (dispatch, getState) => {
    dispatch({
        type: 'SET_ALL_TASKS',
        payload: tasks
    })
}