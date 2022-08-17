import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.module.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const Board = ({ name, boardName, setBoardName }) => {
    const [lis, setLis] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/api/users/list', {
            boardName: boardName
        }).then(res => {
            setLis(res.data)
        }
        )
    }, [])
    return (
        <div className={styles.BoardPlate}>
            <div className={styles.BoardHeader}>
                <div className={styles.Boardtitle}> {name}</div>
                <div className={styles.BoardMore}>
                    <Link to={`/${name}`} onClick={() => setBoardName(name)}>
                        <FontAwesomeIcon icon={faPlus} size="1x" />
                    </Link>
                </div>
            </div>
            <div className={styles.BoardContent}>
                {lis.map((item, idx) => <li key={idx}>{item.title} {item.text}</li>
                )}
            </div>
        </div>
    );
};

export default Board;