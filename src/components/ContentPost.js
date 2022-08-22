import React, { useState } from 'react';
import styles from './Content.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
const ContentPost = ({ boardName, boardText, setBoardText, nick }) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    console.log(boardText[boardName])
    const onSetText = (e) => {
        setText(e.target.value)
    }
    const onSetTitle = (e) => {
        setTitle(e.target.value)
    }
    const onResend = () => {
        let d = new Date()
        let id = String(d.getMonth() + 1) + String(d.getDate()) + String(d.getMilliseconds())
        //서버에 보내기
        axios.post('http://localhost:5000/api/users/post', {
            title: title,
            text: text,
            boardName: boardName,
            nick: nick,
            idx: id
        }).then(res => {
            let t = boardText
            let tmp = boardText[boardName]
            tmp.push({ "title": title, "text": text, "nick": nick })
            t[boardName] = tmp
            setBoardText(t)
        })
    }
    return (
        <div className={styles.PostContainer}>
            <div className={styles.PostHeader}>
                <input value={title} placeholder="제목" onChange={onSetTitle}></input>
            </div>
            <div className={styles.PostContent}>
                <textarea cols="150" rows="30" onChange={onSetText}></textarea>
            </div>
            <Link to={"../" + boardName}>
                <FontAwesomeIcon onClick={onResend} className={styles.PostButton} icon={faEdit} size="3x" />
            </Link>
        </div>
    );
};

export default ContentPost;