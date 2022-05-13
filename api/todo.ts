import fetchAPI from '.'

export const getTodoListApi = async () => {
    return await fetchAPI({ url: '/my-todo-list' })
}

export const addNewTaskApi = async newTaks => {
    let taskInJSONFormat = JSON.stringify(newTaks)
    
    return await fetchAPI({ url: '/my-todo-list', method: 'POST', data: taskInJSONFormat })
}

