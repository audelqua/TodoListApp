import fetchAPI from '.'

export const getTodoListApi = async () => {
    return await fetchAPI({ url: '/my-todo-list' })
}

export const addNewTaskApi = async newTaks => {
    let taskInJSONFormat = JSON.stringify(newTaks)
    
    return await fetchAPI({ url: '/my-todo-list', method: 'POST', data: taskInJSONFormat })
}

export const updateTaskApi = async task => {
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'PATCH', data: taskInJSONFormat })
}

export const removeTaskApi = async task => {
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'DELETE', data: taskInJSONFormat })
}

