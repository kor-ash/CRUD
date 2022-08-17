import React, { useEffect, useState } from 'react';
import styles from './Content.module.css'
import { faE, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
const Content = ({ boardName, boardText, setBoardText }) => {
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
            <div className={styles.ContentList}>
                {lis.map((item, idx) => <li key={idx}>{item.title} {item.text}</li>
                )}
            </div>
        </div >
    );
};

export default Content;