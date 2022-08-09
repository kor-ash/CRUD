import React, { useEffect, useState } from 'react';
import Board from './Board';
import styles from './Board.module.css'
const Home = ({ isLog }) => {
    const [wr, setWr] = useState([])
    useEffect(() => {
        //서버에서 게시된 게시글 받아온 뒤 setWr로 설정?
    }, [])
    return (
        <div>
            <div className={styles.BoardContainer}>
                <Board className={styles.BoardContent} name="Web" />
                <Board className={styles.BoardContent} name="App" />
                <Board className={styles.BoardContent} name="AI" />
                <Board className={styles.BoardContent} name="Secure" />
            </div>
        </div>
    );
};

export default Home;