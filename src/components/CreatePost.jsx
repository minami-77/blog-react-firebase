// Setting for Routes with React-Router
import { useNavigate } from 'react-router-dom';
import "./createPost.css"
import { useState, useEffect } from 'react'

// import function to store values from firebase official docs
import { addDoc, collection } from 'firebase/firestore';
// receive instances auth and db from firebase.jsx
import { auth, db } from "../firebase";

// receive sate of isAuth from App.jsx
const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  // Add document values to cloud firestore using "addDoc" (see official docs)
  const createPost = async() => {
    await addDoc(collection(db, "posts"),{
      title: title,
      postsText: postText,
      author:{
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
    });
    // Redirect to home
    navigate("/");
  };

  useEffect(()=>{
    if (!isAuth){
      navigate("/login");
    }
  }, [])

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            // Set event target as a value of title
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            // Set event target as a value of text
            onChange={(e)=>setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={()=>createPost()}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatePost
