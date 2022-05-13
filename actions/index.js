
export const addNewTaskAction = newTask => (dispatch, getState) => {
    dispatch({
        type: 'ADD_NEW_TASK',
        payload: newTask
    })
}