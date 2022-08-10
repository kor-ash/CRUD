import React, { useEffect, useState } from 'react';
import Board from './Board';
import styles from './Board.module.css'
const Home = ({ isLog, boardName, setBoardName }) => {
    const [wr, setWr] = useState([])
    useEffect(() => {
        //서버에서 게시된 게시글 받아온 뒤 setWr로 설정?
    }, [])
    return (
        <div>
            <div className={styles.BoardContainer}>
                <Board className={styles.BoardContent} boardName={boardName} setBoardName={setBoardName} name="Web" />
                <Board className={styles.BoardContent} boardName={boardName} setBoardName={setBoardName} name="App" />
                <Board className={styles.BoardContent} boardName={boardName} setBoardName={setBoardName} name="AI" />
                <Board className={styles.BoardContent} boardName={boardName} setBoardName={setBoardName} name="Secure" />
            </div>
        </div>
    );
};

export default Home;