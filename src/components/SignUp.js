import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css'

const SignUp = () => {
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
        //서버에 insert
        let isSign = false
        let pwlenViolate = false
        axios.post('http://localhost:5000/api/users/register', {
            email: id,
            password: password
        }).then(res => {
            isSign = res.data.success
            pwlenViolate = res.data.pwlenViolate
            console.log(res.data)
            if (isSign)
                alert("회원가입 성공!")
            else {
                if (pwlenViolate) {
                    alert("비밀번호는 5자리 이상이여야 합니다.")
                }
                else
                    alert("중복된 아이디가 존재합니다.")
            }
        })
    }
    return (
        <div className={styles.Sign}>
            <div className={styles.wrap}>
                <div className={styles.login}>
                    <Link to="/">
                        <h2>Sign-Up</h2>
                    </Link>
                    <div className={styles.login_id}>
                        <h4>E-mail</h4>
                        <input value={id} onChange={onIdChange} type="email" placeholder="Email" />
                    </div>
                    <div className={styles.login_pw}>
                        <h4>Password</h4>
                        <input value={password} onChange={onPwChange} type="password" placeholder="Password" />
                    </div>
                    <div className={styles.submit} >
                        <Link to="/"><input type="submit" value="Sign-Up" onClick={onSubmit} /></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;