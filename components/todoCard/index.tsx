import React from 'react'
import styles from './ToDoCard.module.scss'
import AddNewTaskForm from './addNewTaskForm'
import TaskCellS from './taskCellS'
import Filters from './filters'

const ToDoCard = ({...props}) => {
    return (
        <div className={styles.cardWrapper}>
            <AddNewTaskForm />
            <TaskCellS />
            <Filters />
        </div>
    )
}
export default ToDoCard