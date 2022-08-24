import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from './Content.module.css'
import axios from 'axios';
const ContentEach = ({ nick }) => {
    const [title, setTitle] = useState("") //현재 글 제목
    const [text, setText] = useState("") //현재 글 내용
    const [cmt, setCmt] = useState([]) //전체 댓글
    const [comment, setComment] = useState("") //지금 댓글
    const { id } = useParams()
    const [del, setDel] = useState(false) //댓글이 지워졌을때 리렌더링 위함
    const [writer, setWriter] = useState("")
    const onChange = (e) => {
        setComment(e.target.value)
    }
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
        console.log("nick:", nick)
        //서버에 요청해서 이 글만 받아온다.
        axios.get('http://localhost:5000/api/users/content', {
            params: {
                boardName: boardName,
                idx: id
            }
        }).then((res) => {
            setTitle(res.data[0].title)
            setText(res.data[0].text)
            setWriter(res.data[0].nick)
        }).catch((err) => {
            console.log(err)
        })

    }, [])
    useEffect(() => {
        /* do nothing for re-rendering*/
    }, [del])
    useEffect(() => {
        axios.get('http://localhost:5000/api/users/comment', {
            params: {
                nick: nick,
                idx: id
            }
        }).then((res) => {
            setCmt(res.data)
        })
    }, [del])
    const onSubmit = () => {
        const y = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"]
        let tmp = new Date()
        let year = tmp.getFullYear()
        let month = tmp.getMonth() + 1
        let day = tmp.getDate()
        let yoyil = y[tmp.getDay()]
        let hour = tmp.getHours()
        let min = tmp.getMinutes()
        if (min < 10)
            min = '0' + String(min)
        let date = String(year) + "-" + String(month) + "-" + String(day) + yoyil + " " + String(hour) + ": " + String(min)
        let commentIdx = boardName + String(tmp.getMilliseconds())
        //comment를 서버로 전송
        axios.post('http://localhost:5000/api/users/comment/register', {
            nick: nick, //댓쓴이
            text: comment,
            idx: id, //이 글의 idx
            commentIdx: commentIdx,//이 댓글의 고유번호,
            date: date //날짜
        }).then(res => {
            if (res.data.success) {
                alert("댓글 작성이 완료됐습니다")
                setDel(!del)
                setCmt([...cmt, { commentIdx: commentIdx, idx: id, nick: nick, text: comment }])
            }
            else {
                alert("댓글 작성이 실패했습니다")
            }
        })
    }
    const onCmtDelete = (commentIdx) => {
        //댓글 작성자:nick
        //댓글 고유번호:commentIdx
        axios.post('http://localhost:5000/api/users/comment/delete', {
            nick: nick,
            commentIdx: commentIdx
        }).then(res => {
            if (res.data.success) {
                alert("댓글 삭제 완료")
                setDel(!del)
            }
            else
                alert("댓글 삭제 실패")
        })
    }
    return (
        <div className={styles.ContentEachContainer}>
            <div className={styles.ContentEachTitle}>{title} </div>
            <div className={styles.ContentEachInfo}>
                <div className={styles.ContentWriter}>작성자:{writer}</div>
                {nick === writer && <div className={styles.ContentDelete}><Link to={"../Home"}><FontAwesomeIcon icon={faTrashCan} onClick={onDelete} /></Link></div>}
            </div>
            <div className={styles.ContentEachText}>{text}</div>
            <div className={styles.ContentCommentList}>
                {/*전체 댓글 가져오기*/}
                <div className={styles.ContentAllComment}>
                    {cmt.map((item, idx) => (
                        <div key={idx} className={styles.ContentEachComment}>
                            <div className={styles.ContentEachCommentNick}> {item.nick}</div>
                            <div className={styles.ContentEachCommentDate}> {item.date}</div>
                            <div className={styles.ContentEachCommentText}>{item.text} </div>
                            {nick === item.nick && <div><FontAwesomeIcon className={styles.ContentCommentEachDelete} icon={faTrashCan} onClick={() => onCmtDelete(item.commentIdx)} /></div>}
                            {nick !== item.nick && <div className={styles.ContentCommentEachDeleteNot}></div>}
                        </div>
                    ))}
                </div>
                {/*댓글 Post*/}
                <div className={styles.ContentCommentContainer}>
                    <div className={styles.ContentCommentNick}>{nick}</div>
                    <div className={styles.ContentCommentText}><textarea placeholder="댓글을 입력해주세요." onChange={onChange} cols="86" rows="2"></textarea></div>
                    <FontAwesomeIcon className={styles.ContentButtonEdit} onClick={onSubmit} icon={faEdit} />
                </div>
            </div>
        </div>
    );
};

export default ContentEach;