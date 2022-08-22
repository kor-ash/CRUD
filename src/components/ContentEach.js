import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from './Content.module.css'
import axios from 'axios';
const ContentEach = ({ nick }) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const { id } = useParams()
    const [writer, setWriter] = useState("")
    const onSetText = (e) => {
        setText(e.target.value)
    }
    const onSetTitle = (e) => {
        setTitle(e.target.value)
    }
    const boardName = useLocation().pathname.split('/')[1];
    const onDelete = () => {
        axios.post('http://localhost:5000/api/users/delete', {
            boardName: boardName,
            idx: id
        }).then(res => {
            if (res.data.success)
                alert("삭제 완료")
            else
                alert("삭제 실패")
        })
    }
    useEffect(() => {
        console.log(boardName, id)
        //서버에 요청해서 이 글만 받아온다.
        axios.get('http://localhost:5000/api/users/content', {
            params: {
                boardName: boardName,
                idx: id
            }
        }).then((res) => {
            console.log("res:", res.data[0])
            setTitle(res.data[0].title)
            setText(res.data[0].text)
            setWriter(res.data[0].nick)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    return (
        <div className={styles.ContentEachContainer}>
            <div className={styles.ContentEachTitle}>{title} </div>
            <div className={styles.ContentEachInfo}>
                <div className={styles.ContentWriter}>작성자:{writer}</div>
                {nick === writer && <div className={styles.ContentDelete}><Link to={"../Home"}><FontAwesomeIcon icon={faTrashCan} onClick={onDelete} /></Link></div>}
            </div>
            <div className={styles.ContentEachText}>{text}</div>
        </div>
    );
};

export default ContentEach;