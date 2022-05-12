import React, {} from 'react'
import styles from './ToDoCard.module.scss'

const ToDoCard = ({...props}) => {

    return (
        <div className={styles.cardWrapper}>
            <section className={styles.inputSection}>
                <input type='text' className={styles.input} />
                {/* <button className={styles.addItembButton}/> */}
            </section>
            
        </div>
    )
}
export default ToDoCard