import './App.css'
// import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  //リロードしてもログイン情報が消えないようにローカルストレージのisAuth情報を取得する
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>

    </Router>
    )
}

export default App
