import React, {useState} from 'react'
import styles from './TaskCell.module.scss'
import { FaTimes } from 'react-icons/fa';


const TaskCell = ({task, ...props}) => {

    return (
        <div className={styles.cointainer}>
          <div className={styles.actionWrapper}>
            <input type='checkbox' className={styles.checkbox} />
          </div>
          <div className={styles.taskMessageWrapper}>
            <span className={styles.taskMessage}>{task.note}</span>
          </div>
          <div className={styles.actionWrapper + ' ' + styles.removeItem}>
            <span><FaTimes /></span>
          </div>
        </div>
    )
}
export default TaskCell