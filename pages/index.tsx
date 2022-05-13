import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from '../styles/IndexPage.module.scss'
import TodoCard from '../components/todoCard'
import { getTodoListApi } from '../api/todo'
import { setAllTasksAction } from '../actions'

import { useDispatch } from 'react-redux'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const getListApiCall = async () => {
    try{
      let res = await getTodoListApi()
      
      if(res["status"] === 200) {
        dispatch(setAllTasksAction(res.data))
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getListApiCall()
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.cardTitle}>Todo</span>
      <TodoCard />
    </div>
  )
}

export default Home
