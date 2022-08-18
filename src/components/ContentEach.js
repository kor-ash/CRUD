import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Content.module.css'
import axios from 'axios';
const ContentEach = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const { id } = useParams()
    const onSetText = (e) => {
        setText(e.target.value)
    }
    const onSetTitle = (e) => {
        setTitle(e.target.value)
    }
    const boardName = useLocation().pathname.split('/')[1];
    useEffect(() => {
        //서버에 요청해서 이 글만 받아온다.
        axios.get('http://localhost:5000/api/users/content', {
            params: {
                boardName: boardName,
                idx: id
            }
        }).then((res) => {
            console.log(res)
            setTitle(res.data[0].title)
            setText(res.data[0].text)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    return (
        <div className={styles.ContentEachContainer}>
            <div className={styles.ContentEachTitle}>{title} </div>
            <div className={styles.ContentEachInfo}></div>
            <div className={styles.ContentEachText}>{text}</div>
        </div>
    );
};

export default ContentEach;