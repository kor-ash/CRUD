import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.module.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Board = ({ name, boardName, setBoardName }) => {
    return (
        <div className={styles.BoardPlate}>
            <div className={styles.BoardHeader}>
                <div className={styles.Boardtitle}> {name}</div>
                <div className={styles.BoardMore}>
                    <Link to={`/${name}`} onClick={() => setBoardName(name)}>
                        <FontAwesomeIcon icon={faPlus} size="1.2x" />
                    </Link>
                </div>
            </div>
            <div className={styles.BoardContent}>
                내용
            </div>
        </div>
    );
};

export default Board;