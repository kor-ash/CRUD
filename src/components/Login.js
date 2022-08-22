import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './Login.module.css'
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
const Login = ({ isLog, setLog, isSign, setSign, nick, setNick }) => {
    const sendRequest = async () => {
        const response = await axios.get('http://localhost:5000/api/hello');
        console.log("data:", response.data);
    };
    const [id, setId] = useState("")
    const [password, setPw] = useState("")
    const onIdChange = (e) => {
        setId(e.target.value)
    }
    const onPwChange = (e) => {
        setPw(e.target.value)
    }
    const onSubmit = () => {
        axios.post('http://localhost:5000/api/users/login', {
            email: id,
            password: password
        }).then(res => {
            setLog(res.data.loginSuccess)
            setNick(res.data.nick)
            if (!res.data.loginSuccess) {
                alert("로그인 실패!")
            }
        }
        )
    }
    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.login}>
                    <Link to="/">
                        <h2>Log-in</h2>
                    </Link>
                    <div className={styles.login_sns}>
                        <span><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
                        <span><FontAwesomeIcon icon={faFacebookF} size="2x" /></span>
                        <span><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
                    </div>
                    <div className={styles.login_id}>
                        <h4>E-mail</h4>
                        <input value={id} onChange={onIdChange} type="email" placeholder="Email" />
                    </div>
                    <div className={styles.login_pw}>
                        <h4>Password</h4>
                        <input value={password} onChange={onPwChange} type="password" placeholder="Password" />
                    </div>
                    <div className={styles.login_etc}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" name="" id="" /> Remember Me?
                        </div>
                        <div className={styles.Forgot_pw}>
                            <Link to="./findpw">Forgot Password?</Link>
                        </div>
                        <Link className={styles.SignUp} to="/signup" onClick={() => setSign(true)}>Sign-Up</Link>
                    </div>
                    <div className={styles.submit} >
                        <Link to="/home" onClick={onSubmit}><input type="submit" value="Log-in" /></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;