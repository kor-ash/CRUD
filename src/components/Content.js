import React from 'react';
import styles from './Content.module.css'
const Content = ({ boardName }) => {
    return (
        <div className={styles.Content}>
            {boardName}
        </div >
    );
};

export default Content;