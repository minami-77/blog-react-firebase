import React from 'react'
import { Link } from "react-router";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenToSquare,faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/creatpost">
        <FontAwesomeIcon icon={faPenToSquare} />
        記事投稿
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faRightToBracket} />
        ログイン
      </Link>
    </nav>
  )
}

export default Navbar;
