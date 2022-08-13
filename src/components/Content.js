import React from 'react';
import styles from './Content.module.css'
import { faE, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Content = ({ boardName }) => {
    return (
        <div className={styles.ContentContainer}>
            <div className={styles.ContentHeader}>
                <div className={styles.ContentTitle}>{boardName}</div>
                <div className={styles.ContentSearch}>
                    <input placeholder="검색어를 입력하세요" />
                    <FontAwesomeIcon className={styles.ContentButtonSearch} icon={faSearch} />
                    <FontAwesomeIcon className={styles.ContentButtonEdit} icon={faEdit} />
                </div>
            </div>
            <div className={styles.ContentList}>

            </div>
        </div >
    );
};

export default Content;