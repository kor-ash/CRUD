import React, { useEffect, useState } from 'react';
import Board from './Board';
import styles from './Board.module.css'
const Home = ({ isLog, setLog, boardName, setBoardName, nick, setNick }) => {
    const [wr, setWr] = useState([])
    useEffect(() => {
        console.log(nick)
        //서버에서 게시된 게시글 받아온 뒤 setWr로 설정?
    }, [])
    return (
        <div className={styles.HomeBackground}>
            <div className={styles.BoardContainer}>
                <Board nick={nick} className={styles.BoardContent} boardName="Web" setBoardName={setBoardName} name="Web" />
                <Board nick={nick} className={styles.BoardContent} boardName="App" setBoardName={setBoardName} name="App" />
                <Board nick={nick} className={styles.BoardContent} boardName="AI" setBoardName={setBoardName} name="AI" />
                <Board nick={nick} className={styles.BoardContent} boardName="Secure" setBoardName={setBoardName} name="Secure" />
            </div>
        </div>
    );
};

export default Home;