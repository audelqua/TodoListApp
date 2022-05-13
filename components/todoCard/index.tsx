import React, {useState, useRef} from 'react'
import styles from './ToDoCard.module.scss'
import { updateTaskAction, removeTaskAction } from '../../actions'
import { updateTaskApi, removeTaskApi } from '../../api/todo'
import { FaTimes } from 'react-icons/fa';
import AddNewTaskForm from './addNewTaskForm'
import { useDispatch, useSelector } from 'react-redux'

const ToDoCard = ({...props}) => {
    const myTasks = useSelector(state => state.todoList.tasks)
    const dispatch = useDispatch()
    const [selectedTask, updateSelectedTask] = useState({})
    const [editMode, updateEditMode] = useState(false)
    
    const handleSetSelectedTask = (e, task) => {
        if(e.detail === 2) {
            updateEditMode(task.createdAt)
            updateSelectedTask(task)
        }
    }

    const handleUpdateTask = async e => {
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

    const handleRemoveTask = async task => {
        try{
            let res = await removeTaskApi(task)
            if(res['status'] === 200) {
                dispatch(removeTaskAction(task))
            }
        }catch(err) {
            console.log('err', err);
            
        }
    }

    const handleCompleteTask = async task => {
        let myTask = {...task, completed: !task.completed}
        
        try{
            let res = await updateTaskApi(myTask)
            if(res['status'] === 200) {
                dispatch(updateTaskAction(myTask))
            }
        }catch(err) {
            console.log('err', err);
        }
    }

    const handleAction = (type, task) => {
        updateEditMode(false)
        switch (type) {
            case 'UPDATE':
                handleUpdateTask()
                break;
            case 'REMOVE':
                handleRemoveTask(task)
                break;
            case 'CHANGE_COMPLETED_STATUS':
                handleCompleteTask(task)
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
                                <input type='checkbox' checked={task.completed} className={styles.checkbox} onClick={() => handleAction('CHANGE_COMPLETED_STATUS', task)}/>
                            </div>
                            <div className={styles.taskMessageWrapper} onClick={(e) => handleSetSelectedTask(e, task) }>
                                {task.createdAt === editMode 
                                    ?   <form className={styles.updateTaskInputSection} onSubmit={handleUpdateTask}>
                                            <input 
                                                type='text' 
                                                className={styles.updateTaskInput} 
                                                value={selectedTask.note}
                                                onChange={e => updateSelectedTask(task => {return ({...task, note: e.target.value})})}
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
