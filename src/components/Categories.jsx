import React from 'react';
import styles from './Categories.module.css'
const Categories = () => {
    return (
        <div className={styles.buttons}>
            <button className={styles.easy}> Ez</button>
            <button className={styles.normal}> Normal </button>
            <button className={styles.hard}> Hard </button>
        </div>
    );
};

export default Categories;