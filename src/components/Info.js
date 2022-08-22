import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Info.module.css'
const Info = ({ nick }) => {
    const [lis, setLis] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/users/info', {
            params: {
                nick: nick
            }
        }).then((res) => {
            console.log(res)
            setLis(res.data)
        })
        //서버에서 유저가 쓴 글 조회
    }, [])
    console.log(lis)
    return (
        <div className={styles.InfoContainer}>
            <div className={styles.InfoId}>ID:{nick}</div>
            <div className={styles.InfoHeader}>
                <div className={styles.InfoBoard}>게시판</div>
                <div className={styles.InfoTitle}>제 목</div>
            </div>
            <div className={styles.InfoContent}>
                {lis.map((i, idx) =>
                    <div key={idx} className={styles.InfoContentHeader}>
                        <Link className={styles.InfoContentBoard} to={"../" + i.boardName}>{i.boardName}</Link>
                        <Link className={styles.InfoContentTitle} to={"../" + i.boardName + "/" + i.idx}>{i.title}</Link>

                    </div>)}
            </div>
        </div >
    );
};

export default Info;