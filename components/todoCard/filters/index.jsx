import React, { useState, useEffect } from 'react'
import styles from './Filters.module.scss'
import { updateFilterAction } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const Filters = ({...props}) => {
    const filterType = useSelector(state => state.todoList.filter)
    const dispatch = useDispatch()
    const router  = useRouter()

    const handleChangeFilter = type => {
        dispatch(updateFilterAction(type))
        router.push({ 
            pathname: '/', 
            query: { ...router.query, filter: type } }, 
            undefined, 
            {}
        )
    }
    
    return (
        <div className={styles.filtersWrapper}>
            <span>3 items left</span>
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
            <button className={styles.clearButton}>clear completed</button>
        </div>
    )
}
export default Filters