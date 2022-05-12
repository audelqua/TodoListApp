import type { NextPage } from 'next'
import styles from '../styles/IndexPage.module.scss'
import TodoCard from '../components/todoCard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.cardTitle}>Todo</span>
      <TodoCard />
    </div>
  )
}

export default Home
