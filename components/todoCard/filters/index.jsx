import React, { useState, useEffect } from 'react'
import styles from './Filters.module.scss'
import { updateFilterAction } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux';


const Filters = ({...props}) => {
    const filterType = useSelector(state => state.todoList.filter)
    const dispatch = useDispatch()
    
    return (
        <div className={styles.filtersWrapper}>
            <span>3 items left</span>
            <div className={styles.filterButtonWrapper}>
                <span 
                    className={filterType === 'ALL' ? styles.filterButton + ' ' + styles.active :  styles.filterButton}
                    onClick={() => dispatch(updateFilterAction('ALL'))}
                >
                    All
                </span>
                <span 
                    className={filterType === 'ACTIVE' ? styles.filterButton + ' ' + styles.active :  styles.filterButton}
                    onClick={() => dispatch(updateFilterAction('ACTIVE'))}
                >
                    Active
                </span>
            </div>
            <button className={styles.clearButton}>clear completed</button>
        </div>
    )
}
export default Filters