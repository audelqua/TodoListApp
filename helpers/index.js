import { BASE_URL } from '../constants/api'

export const newTaskGenerator = note => {
    const newTask = new Object({
        createdAt: new Date().valueOf(),
        completed: false,
        note,
    })

    return newTask
}

export const formatURL = url => {
    return BASE_URL + url
}
