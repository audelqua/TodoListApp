import React, {useState} from 'react'
import styles from './ToDoCard.module.scss'
import { addNewTaskAction } from '../../actions'
import { useDispatch } from 'react-redux'

const ToDoCard = ({...props}) => {
    const dispatch = useDispatch()
    const [newTask, updateNewTask] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addNewTaskAction(newTask))
    }

    return (
        <div className={styles.cardWrapper}>
            <form className={styles.inputSection} onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className={styles.customInput} 
                    value={newTask}
                    onChange={e => updateNewTask(e.target.value)}
                    placeholder='What need to be done?'
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.addButton} type='submit'>
                        <span className={styles.buttonText}>Add</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ToDoCard