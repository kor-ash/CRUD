import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from './components/Content';
import Home from './components/Home';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './components/Login';
import Logout from './components/Logout';
const App = () => {
  const [isLog, setLog] = useState(false)
  return (
    <div className={styles.Wrapper}>
      <Router>
        {isLog && <div className={styles.header}>
          <Nav isLog={isLog} setLog={setLog}></Nav>
        </div>
        }
        {!isLog && <Login isLog={isLog} setLog={setLog} />}
        <Routes>
          <Route path="/" element={<Home isLog={isLog} setLog={setLog}></Home>}></Route>
          <Route path="/info" element={<Content />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;