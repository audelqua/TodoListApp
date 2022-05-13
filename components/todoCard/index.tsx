import React, {useState, useRef} from 'react'
import styles from './ToDoCard.module.scss'
import { updateTaskAction } from '../../actions'
import { updateTaskApi } from '../../api/todo'
import { FaTimes } from 'react-icons/fa';
import AddNewTaskForm from './addNewTaskForm'
import { useDispatch, useSelector } from 'react-redux'

const ToDoCard = ({...props}) => {
    const inputRef = useRef(null)
    const myTasks = useSelector(state => state.todoList.tasks)
    const dispatch = useDispatch()
    const [selectedTask, updateSelectedTask] = useState({})
    const [editMode, updateEditMode] = useState(false)
    
    const handleSetSelectedTask = (e, task) => {
        if(e.detail === 2) {
            updateEditMode(task.createdAt)
            updateSelectedTask(task)
            // inputRef.current.focus()
        }
    }

    const handleSubmit = async (e) => {
        e && e.preventDefault()
        
        try{
            let res = await updateTaskApi(selectedTask)
            if(res['status'] === 200) {
                updateEditMode(false)
                dispatch(updateTaskAction(selectedTask))
            }
        }catch(err) {
            console.log('err', err);
            
        }
    }

    const handleAction = (type, task) => {
        switch (type) {
            case 'UPDATE':
                updateEditMode(false)
                handleSubmit()
                break;
            case 'REMOVE':
                console.log('DELETE');
                break;
            case 'CHANGE_STATUS':
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
                                <input type='checkbox' className={styles.checkbox} onClick={() => handleAction('CHANGE_STATUS', task)}/>
                            </div>
                            <div className={styles.taskMessageWrapper} onClick={(e) => handleSetSelectedTask(e, task) }>
                                {task.createdAt === editMode 
                                    ?   <form className={styles.updateTaskInputSection} onSubmit={handleSubmit}>
                                            <input 
                                                type='text' 
                                                className={styles.updateTaskInput} 
                                                value={selectedTask.note}
                                                onChange={e => updateSelectedTask(task => {return ({...task, note: e.target.value})})}
                                                ref={inputRef}
                                            />
                                        </form>
                                    :   <span className={styles.taskMessage}>{task.note}</span>
                                }
                            </div>
                            <div 
                                className={styles.actionWrapper + ' ' + styles.removeItem}
                                onClick={() => handleAction(task.createdAt === editMode ? 'UPDATE' : 'REMOVE', task)}
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
