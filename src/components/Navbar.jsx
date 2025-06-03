// Setting for Routes with React-Router
import { Link } from "react-router-dom";

import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenToSquare,faRightToBracket } from '@fortawesome/free-solid-svg-icons'

// receive sate of isAuth from App.jsx
const Navbar = ({isAuth}) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>

      {/* If isAuth is logout, display login. If login, display logout and post article. */}
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
        ) : (
          <>
            <Link to="/createPost">
              <FontAwesomeIcon icon={faPenToSquare} />
              記事投稿
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faRightToBracket} />
              ログアウト
            </Link>
          </>
        )
      }

    </nav>
  )
}

export default Navbar;
