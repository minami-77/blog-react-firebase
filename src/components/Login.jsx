// import authentication function from firebase official docs
import { signInWithPopup } from 'firebase/auth';
// Setting for Routes with React-Router
import { useNavigate } from 'react-router-dom';
// receive instances auth and provider from firebase.jsx
import { auth, provider } from "../firebase";

// receive sate of isAuth from App.jsx
const Login = ({setIsAuth}) => {
  const navigate = useNavigate();

  // Set function to login with google using "signInWithPopup.then=>"(see official docs)
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
      console.log(result);
      // Store the state of login/logout to local storage
      localStorage.setItem("isAuth", true);
      // Update the state
      setIsAuth(true);
      // redirect to home
      navigate("/");
    });

  };

  return (
    <div>
      <p>ログインしてはじめる</p>
      {/* Call Google login function on Click */}
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
