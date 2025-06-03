// Setting for Routes with React-Router
import { useNavigate } from 'react-router-dom';
// import authentication function from firebase official docs
import { signOut } from 'firebase/auth';
// receive instances auth from firebase.jsx
import { auth } from "../firebase";

// receive setIsAuth from App.jsx to update the state of login/logout
const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();

  // Set function "signOut.then=>"(see official docs)
  const logout = () => {
    signOut(auth).then(()=>{
      // Clear the state stored in local storage
      localStorage.clear();
      // Update the state
      setIsAuth(false);
      // Redirect to "login"
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      {/* Call logout function on Click */}
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout
