import React, { useEffect, useState } from 'react';
import "./FontAwesome";
import styles from './Nav.module.css'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = ({ isLog, setLog, nick }) => {
    const [stat, setStat] = useState(false)
    const onHover = () => {
        setStat(true)
    }
    const offHover = () => {
        setStat(false)
    }
    return (
        <nav className={styles.wrapper}>
            {/* 하단 네비게이션 최상위 태그 */}
            <div>
                <Link to="/home">
                    <FontAwesomeIcon className={styles.icon} icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                </Link>
            </div>
            <div>
                <Link to="/home/find">
                    <FontAwesomeIcon className={styles.icon} icon="compass" />
                </Link>
            </div>
            <div>
                <Link to="/home/plus">
                    <FontAwesomeIcon className={styles.icon} icon="plus" />
                </Link>
            </div>
            <div>
                <div className={styles.iconHover}>
                    <Link to="/home/info"> <FontAwesomeIcon className={styles.icon} icon="user" onMouseOver={onHover} onMouseOut={offHover} /></Link>
                    <span className={styles.iconHidden}>{stat && "ID:" + nick}</span>
                </div>

            </div>
            {isLog &&
                <div>

                    <Link to="/" onClick={() => setLog(false)}>
                        <FontAwesomeIcon className={styles.icon} icon={faArrowRightFromBracket} />

                    </Link>
                </div>
            }
        </nav>
    );
};

export default Nav;