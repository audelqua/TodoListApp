import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from '../styles/IndexPage.module.scss'
import TodoCard from '../components/todoCard'
import { getTodoListApi } from '../api/todo'
import { setAllTasksAction, updateFilterAction } from '../actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'


export async function getServerSideProps({  }) {
  try {
    let res = await getTodoListApi();
      
    return {
      props: {
        myTasks: res.data ?? [],
      }
    }
  } catch (err) {
    return {
      props: {
        err: err.message || "",
      }
    }
  }
}

const Home: NextPage = ({myTasks, ...props}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  
  useEffect(() => {
    dispatch(setAllTasksAction(myTasks))
    if(router.query.filter) dispatch(updateFilterAction(router.query.filter))
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.cardTitle}>Todo</span>
      <TodoCard />
    </div>
  )
}

export default Home
