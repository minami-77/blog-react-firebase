// Setting for Routes with React-Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState } from 'react';
import './App.css'
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';


function App() {
  //リロードしてもログイン情報が消えないようにローカルストレージにisAuth情報を保存
  // localStorage.getItem() (Web API official function)
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"));

    return (
    <BrowserRouter>
      {/* Pass the state of login/logout with isAuth  */}
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}></Route>
        {/* Update the state of login/logout with setIsAuth */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
