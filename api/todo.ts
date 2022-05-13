import fetchAPI from '.'

interface TodoApi {
    newTask: Object,
    task: Object,
    id: Number
}

export const getTodoListApi = () => {
    return fetchAPI({ url: '/my-todo-list' })
}

export const addNewTaskApi = (newTask:TodoApi) => {
    let taskInJSONFormat = JSON.stringify(newTask)
    
    return fetchAPI({ url: '/my-todo-list', method: 'POST', data: taskInJSONFormat })
}

export const updateTaskApi = (task:TodoApi) => {    
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return fetchAPI({ url: `/my-todo-list/${id}`, method: 'PATCH', data: taskInJSONFormat })
}

export const removeTaskApi = (task:TodoApi) => {
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return fetchAPI({ url: `/my-todo-list/${id}`, method: 'DELETE', data: taskInJSONFormat })
}

export const removeCompleteTasksApi = () => {
    
    return fetchAPI({ url: `/my-todo-list/`, method: 'DELETE'})
}

