import fetchAPI from '.'

interface TodoApi {
    newTask: Object,
    task: Object,
    id: Number
}

export const getTodoListApi = async () => {
    return await fetchAPI({ url: '/my-todo-list' })
}

export const addNewTaskApi = async (newTask:TodoApi) => {
    let taskInJSONFormat = JSON.stringify(newTask)
    
    return await fetchAPI({ url: '/my-todo-list', method: 'POST', data: taskInJSONFormat })
}

export const updateTaskApi = async (task:TodoApi) => {    
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'PATCH', data: taskInJSONFormat })
}

export const removeTaskApi = async (task:TodoApi) => {
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'DELETE', data: taskInJSONFormat })
}

export const removeCompleteTasksApi = async () => {
    
    return await fetchAPI({ url: `/my-todo-list/`, method: 'DELETE'})
}

