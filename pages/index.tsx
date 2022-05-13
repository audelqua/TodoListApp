import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import styles from '../styles/IndexPage.module.scss'
import TodoCard from '../components/todoCard'
import { getTodoList } from '../api/todo'

import { useSelector } from 'react-redux'
import axios from 'axios'

const Home: NextPage = () => {
  const myTasks = useSelector(state => state.todoList.tasks)

  const getListApiCall = async () => {
    try{
      let res = await getTodoList()
      console.log(res);
      
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
