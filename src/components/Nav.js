import React, { useState } from 'react';
import "./FontAwesome";
import styles from './Nav.module.css'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = ({ isLog, setLog }) => {
    const [isHover, setHover] = useState(false)
    return (
        <nav className={styles.wrapper}>
            {/* 하단 네비게이션 최상위 태그 */}
            <div>
                <Link to="/">
                    <FontAwesomeIcon className={styles.icon} icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                </Link>
            </div>
            <div>
                <Link to="/find">
                    <FontAwesomeIcon className={styles.icon} icon="compass" />
                </Link>
            </div>
            <div>
                <Link to="/signup">
                    <FontAwesomeIcon className={styles.icon} icon="plus" />
                </Link>
            </div>
            <div>
                <Link to="/info">
                    <FontAwesomeIcon className={styles.icon} icon="user" />
                </Link>
            </div>
            {isLog &&
                <div>
                    <Link to="/" onClick={() => setLog(false)}>
                        <FontAwesomeIcon className={styles.icon} icon={faArrowRightFromBracket} onMouseOver={() => {
                            setHover(true)
                        }}
                            onMouseOut={
                                () => {
                                    setHover(false)
                                }
                            } />
                    </Link>
                </div>
            }
        </nav>
    );
};

export default Nav;