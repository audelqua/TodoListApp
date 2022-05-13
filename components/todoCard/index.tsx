import React, {useState} from 'react'
import styles from './ToDoCard.module.scss'
import { addNewTaskAction } from '../../actions'
import { addNewTaskApi } from '../../api/todo'
import { newTaskGenerator } from '../../helpers'
import { useDispatch } from 'react-redux'

const ToDoCard = ({...props}) => {
    const dispatch = useDispatch()
    const [taskMessage, updateTaskMessage] = useState('')
    
    const handleSubmit = async e => {
        e.preventDefault()
        const newTask = newTaskGenerator(taskMessage)

        try{
            let res = await addNewTaskApi(newTask)
            console.log('res', res);
            
            dispatch(addNewTaskAction(newTask))
        }catch(error) {
            console.log('error', error);
        }
    }

    return (
        <div className={styles.cardWrapper}>
            <form className={styles.inputSection} onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className={styles.customInput} 
                    value={taskMessage}
                    onChange={e => updateTaskMessage(e.target.value)}
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