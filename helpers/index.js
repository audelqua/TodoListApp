export const newTaskGenerator = text => {
    const newTask = new Object({
        createdAt: new Date().valueOf(),
        completed: false,
        text,
    })

    return newTask
}
