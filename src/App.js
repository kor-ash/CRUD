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
import ContentPost from './components/ContentPost';
import ContentEach from './components/ContentEach';
import Info from './components/Info';
const App = () => {
  const [boardText, setBoardText] = useState({ "Web": [], "App": [], "AI": [], "Secure": [] })
  const [isLog, setLog] = useState(false)
  const [isSign, setSign] = useState(false)
  const [nick, setNick] = useState("")
  const [boardName, setBoardName] = useState("")
  return (
    <div className={styles.Wrapper}>
      <Router>
        {isLog && <div className={styles.header}>
          <Nav isLog={isLog} setLog={setLog} nick={nick}></Nav>
        </div>
        }
        <Routes>
          {!isLog && <Route path="/" element={<Login isLog={isLog} setLog={setLog} nick={nick} setNick={setNick} />}></Route>}
          {isLog && <Route path="/home" element={<Home boardName={boardName} setBoardName={setBoardName} isLog={isLog} setLog={setLog} nick={nick} setNick={setNick}></Home>}></Route>}
          {!isLog && <Route path="/home" element={<Login isLog={isLog} setLog={setLog} />}></Route>}
          {!isLog && <Route path="/signup" element={<SignUp />}></Route>}
          {isLog && <Route path="/home/info" element={<Info nick={nick} />}></Route>}
          {isLog && <Route path={boardName + "/post"} element={<ContentPost nick={nick} setNick={setNick} boardName={boardName} boardText={boardText} setBoardText={setBoardText} />}></Route>}
          {isLog && <Route path={`/${boardName}`} element={<Content nick={nick} setNick={setNick} boardName={boardName} boardText={boardText} setBoardText={setBoardText} />} />}
          {isLog && <Route path=":boardName/:id" element={<ContentEach nick={nick} setNick={setNick} boardName={boardName} boardText={boardText} setBoardText={setBoardText} />} />}
        </Routes>
      </Router>
    </div >
  );
};

export default App;