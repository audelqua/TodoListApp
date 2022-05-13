import React, { useState, useEffect } from 'react'
import styles from './Filters.module.scss'
import { updateFilterAction, removeCompletedTasksAction } from '../../../actions'
import { removeCompleteTasksApi } from '../../../api/todo'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const Filters = ({...props}) => {
    const filterType = useSelector(state => state.todoList.filter)
    const tasks = useSelector(state => state.todoList.tasks)
    const dispatch = useDispatch()
    const router  = useRouter()
    const [numberOfIncompleteTasks, setNumberOfIncompleteTasks] = useState(0)

    const handleChangeFilter = type => {
        dispatch(updateFilterAction(type))
        router.push({ 
            pathname: '/', 
            query: { ...router.query, filter: type } }, 
            undefined, 
            {}
        )
    }

    // const handleRemoveCompletedTasks = async () => {
    //     let removedTasks = tasks.filter(task => !task.completed)
    //     try{
    //         let res = await removeCompleteTasksApi(removedTasks)
    //         dispatch(removeCompletedTasksAction(removedTasks))
    //     }catch(error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        let localNumberOfIncompleteTasks = tasks.map(task => ({...task}))

        setNumberOfIncompleteTasks(localNumberOfIncompleteTasks.filter(task => !task.completed).length)
    }, [tasks])
    
    return (
        <div className={styles.filtersWrapper}>
            <span>{numberOfIncompleteTasks} items left</span>
            <div className={styles.filterButtonWrapper}>
                <span 
                    className={filterType === 'ALL' ? styles.filterButton + ' ' + styles.active :  styles.filterButton}
                    onClick={() => handleChangeFilter('ALL')}
                >
                    All
                </span>
                <span 
                    className={filterType === 'ACTIVE' ? styles.filterButton + ' ' + styles.active :  styles.filterButton}
                    onClick={() => handleChangeFilter('ACTIVE')}
                >
                    Active
                </span>
            </div>
            {/* <button className={styles.clearButton} onClick={handleRemoveCompletedTasks}>clear completed</button> */}
        </div>
    )
}
export default Filters