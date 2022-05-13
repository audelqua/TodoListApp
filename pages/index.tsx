import type { NextPage } from 'next'
import styles from '../styles/IndexPage.module.scss'
import TodoCard from '../components/todoCard'
import { useSelector } from 'react-redux'

const Home: NextPage = () => {
  const myTasks = useSelector(state => state.todoList.tasks)
  console.log('myTasks', myTasks);
  
  return (
    <div className={styles.container}>
      <span className={styles.cardTitle}>Todo</span>
      <TodoCard />
    </div>
  )
}

export default Home
