import { BASE_URL } from '../constants/api'


export const newTaskGenerator = text => {
    const newTask = new Object({
        createdAt: new Date().valueOf(),
        completed: false,
        text,
    })

    return newTask
}

export const formatURL = url => {
    return BASE_URL + url
}
