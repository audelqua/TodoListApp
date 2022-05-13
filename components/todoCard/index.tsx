import React, {useState} from 'react'
import styles from './ToDoCard.module.scss'
import { addNewTaskAction } from '../../actions'
import { addNewTaskApi } from '../../api/todo'
import { newTaskGenerator } from '../../helpers'
import TaskCell from './taskCell'
import { useDispatch, useSelector } from 'react-redux'

const ToDoCard = ({...props}) => {
    const dispatch = useDispatch()
    const myTasks = useSelector(state => state.todoList.tasks)
    const [note, updateNote] = useState('')
    
    const handleSubmit = async e => {
        e.preventDefault()
        if(note === '') return
        const newTask = newTaskGenerator(note)

        try{
            let res = await addNewTaskApi(newTask)
            if(res["status"] === 201) {
                dispatch(addNewTaskAction(newTask))
                updateNote('')
            }
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
                    value={note}
                    onChange={e => updateNote(e.target.value)}
                    placeholder='What need to be done?'
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.addButton} type='submit'>
                        <span className={styles.buttonText}>Add</span>
                    </button>
                </div>
            </form>
            {myTasks.length > 0 
                ?   myTasks.map(task => <TaskCell task={task} /> )
                :   <div className={styles.noItemExist}>No task exist yet</div>
            }
            
        </div>
    )
}
export default ToDoCard