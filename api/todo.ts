import fetchAPI from '.'

export const getTodoList = async () => {
    return await fetchAPI({ url: '/my-todo-list' })
}

