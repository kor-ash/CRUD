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
            {lis.map((item, idx) => idx <= 3 ?
                <li className={styles.BoardContent} key={idx}>
                    <Link to={"../" + boardName + "/" + idx}>{item.title}</Link>
                </li> : null
            )}
        </div>
    );
};

export default Board;