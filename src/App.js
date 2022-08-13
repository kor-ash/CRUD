import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from './components/Content';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './components/Login';
import Logout from './components/Logout';
import axios from 'axios';
const App = () => {
  const [isLog, setLog] = useState(false)
  const [isSign, setSign] = useState(false)
  const [boardName, setBoardName] = useState("")
  return (
    <div className={styles.Wrapper}>
      <Router>
        {isLog && <div className={styles.header}>
          <Nav isLog={isLog} setLog={setLog}></Nav>
        </div>
        }
        <Routes>
          {!isLog && <Route path="/" element={<Login isLog={isLog} setLog={setLog} />}></Route>}
          {isLog && <Route path="/home" element={<Home boardName={boardName} setBoardName={setBoardName} isLog={isLog} setLog={setLog}></Home>}></Route>}
          {!isLog && <Route path="/home" element={<Login isLog={isLog} setLog={setLog} />}></Route>}
          {!isLog && <Route path="/signup" element={<SignUp />}></Route>}
          {isLog && <Route path="/info" element={<Content />}></Route>}
          {isLog && <Route path={`/${boardName}`} element={<Content boardName={boardName} />} />}
        </Routes>
      </Router>
    </div >
  );
};

export default App;