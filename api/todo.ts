import fetchAPI from '.'

interface Todo {
    newTask: Object,
    task: Object,
}

export const getTodoListApi = (): any => {
    return fetchAPI({ url: '/my-todo-list' })
}

export const addNewTaskApi = async (newTask:Todo) => {
    let taskInJSONFormat = JSON.stringify(newTask)
    
    return await fetchAPI({ url: '/my-todo-list', method: 'POST', data: taskInJSONFormat })
}

export const updateTaskApi = async (task:any) => {    
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'PATCH', data: taskInJSONFormat })
}

export const removeTaskApi = async (task:any) => {
    let id = task.id
    let taskInJSONFormat = JSON.stringify(task)
    
    return await fetchAPI({ url: `/my-todo-list/${id}`, method: 'DELETE', data: taskInJSONFormat })
}

export const removeCompleteTasksApi = async () => {
    
    return await fetchAPI({ url: `/my-todo-list/`, method: 'DELETE'})
}

