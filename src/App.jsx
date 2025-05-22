import './App.css'
// import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>

    </Router>
    )
}

export default App
