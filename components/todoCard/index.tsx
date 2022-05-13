import React, {useState} from 'react'
import styles from './ToDoCard.module.scss'
import { addNewTaskAction } from '../../actions'
import { addNewTaskApi } from '../../api/todo'
import { newTaskGenerator } from '../../helpers'
import { FaTimes } from 'react-icons/fa';
import TaskCell from './taskCell'
import { useDispatch, useSelector } from 'react-redux'

const ToDoCard = ({...props}) => {
    const myTasks = useSelector(state => state.todoList.tasks)
    const [targetTask, updateTargetTask] = useState({})
    const [editMode, updateEditMode] = useState(false)
    
    const handleSetTargetTask = (e, task) => {
        if(e.detail === 2) {
            updateEditMode(task.createdAt)
            updateTargetTask(task)
        }
    }

    const handleSubmit = () => {

    }

    const handleAction = type => {
        switch (type) {
            case 'UPDATE':
                console.log('UPDATE');
                break;
            case 'REMOVE':
                console.log('DELETE');
                break;
        }
    }

    return (
        <div className={styles.cardWrapper}>
            <AddNewTaskForm />
            {myTasks.length > 0 
                ?   myTasks.map(task => 
                        <div className={styles.listCointainer}>
                            <div className={styles.actionWrapper}>
                                <input type='checkbox' className={styles.checkbox} />
                            </div>
                            <div className={styles.taskMessageWrapper} onClick={(e) => handleSetTargetTask(e, task) }>
                                {task.createdAt === editMode 
                                    ?   <form className={styles.updateTaskInputSection} onSubmit={handleSubmit}>
                                            <input 
                                                type='text' 
                                                className={styles.updateTaskInput} 
                                                value={targetTask.note}
                                                onChange={e => updateTargetTask(task => {return ({...task, note: e.target.value})})}
                                                placeholder='What need to be done?'
                                            />
                                        </form>
                                    :   <span className={styles.taskMessage}>{task.note}</span>
                                }
                            </div>
                            <div 
                                className={styles.actionWrapper + ' ' + styles.removeItem}
                                onClick={() => handleAction(task.createdAt === editMode ? 'UPDATE' : 'REMOVE')}
                            >
                                {task.createdAt === editMode 
                                    ?   <span className={styles.actionText}>Update</span>
                                    :   <span><FaTimes /></span>
                                }
                            </div>
                        </div>
                    )
                :   <div className={styles.noItemExist}>No task exist yet</div>
            }
        </div>
    )
}
export default ToDoCard



const AddNewTaskForm = ({...props}) => {
    const dispatch = useDispatch()
    const [newNote, updateNewNote] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if(newNote === '') return
        const newTask = newTaskGenerator(newNote)

        try{
            let res = await addNewTaskApi(newTask)
            if(res["status"] === 201) {
                dispatch(addNewTaskAction(newTask))
                updateNewNote('')
            }
        }catch(error) {
            console.log('error', error);
        }
    }

    return (
        <form className={styles.inputSection} onSubmit={handleSubmit}>
            <input 
                type='text' 
                className={styles.customInput} 
                value={newNote}
                onChange={e => updateNewNote(e.target.value)}
                placeholder='What need to be done?'
            />
            <div className={styles.buttonWrapper}>
                <button className={styles.addButton} type='submit'>
                    <span className={styles.buttonText}>Add</span>
                </button>
            </div>
        </form>
    )
}