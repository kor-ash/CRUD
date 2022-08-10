import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './Login.module.css'
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Login = ({ isLog, setLog }) => {
    useEffect(() => {
        console.log("Changed! ")
    }, [])
    const [id, setId] = useState("")
    const [password, setPw] = useState("")
    const onIdChange = (e) => {
        setId(e.target.value)
    }
    const onPwChange = (e) => {
        setPw(e.target.value)
    }
    const onSubmit = () => {
        console.log(id, password)
        setLog(true)
    }
    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.login}>
                    <h2>Log-in</h2>
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
                        <div className={styles.forgot_pw}>
                            <Link to="./findpw">Forgot Password?</Link>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className={styles.submit}>
                        <div>
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;