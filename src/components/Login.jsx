import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
      console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });

  };

  return (
    <div>
      <p>ログインしてはじめる</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
