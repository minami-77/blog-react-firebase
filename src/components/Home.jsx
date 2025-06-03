import React, { useEffect, useState } from 'react';
import "./Home.css";
// import functions to store values from firebase official docs
import { collection, doc, deleteDoc, getDocs } from 'firebase/firestore';
// receive instances auth and provider from firebase.jsx
import { auth, db } from "../firebase";


const Home = () => {
const [postList, setPostList] = useState([]);

  // 2nd argument is set empty to be executed only once on initial mount.
  useEffect(()=>{
    // Define async function
    const getPosts = async () => {
      // Get value of document as variable "data" using "getDocs" (see official docs, "posts" is a collection's name)
      const data = await getDocs(collection (db,"posts"))

      console.log(data);
      console.log(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));

      // Get value of firestore data and id using function "data()" (see official docs)
      // id needs to be added after "," cause it is not considered as value on firestore
      // "..." is a spread syntax
      setPostList(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));
    };
    // Call the function
    getPosts();
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id))
    window.location.href="/";
  }

  return (
    <div className="homePage">
      {postList.map((post)=>{
        return (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">
            {post.postsText}
          </div>
          <div className="nameAndDeleteButton">
            <h3>@{post.author.username}</h3>
            { post.author.id === auth.currentUser?.uid && (
              <button onClick={()=> handleDelete(post.id)}>Delete</button>
            )}
          </div>
        </div>
        )

      })}


    </div>
  )
}

export default Home;
