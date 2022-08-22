import React, { useEffect, useState } from 'react';
import styles from './Content.module.css'
import { faE, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
const Content = ({ boardName, boardText, setBoardText, nick }) => {
    const [lis, setLis] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/api/users/list', {
            boardName: boardName
        }).then(res => {
            setLis(res.data)
            console.log(res)
        }
        )
    }, [boardText])
    return (
        <div className={styles.ContentContainer}>
            <div className={styles.ContentHeader}>
                <div className={styles.ContentTitle}>{boardName}</div>
                <div className={styles.ContentSearch}>
                    <input placeholder="검색어를 입력하세요" />
                    <div className={styles.Icon}>
                        <FontAwesomeIcon className={styles.ContentButtonSearch} icon={faSearch} />
                        <Link to={"./" + "post"}><FontAwesomeIcon className={styles.ContentButtonEdit} icon={faEdit} /></Link>
                    </div>
                </div>
            </div>
            {lis.map((item, idx) =>
                <li className={styles.BoardContent} key={idx}>
                    <Link to={"../" + boardName + "/" + lis[0].idx}>{item.title}</Link>
                </li>
            )}
        </div >
    );
};

export default Content;