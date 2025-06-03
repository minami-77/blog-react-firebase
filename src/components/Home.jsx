import React, { useEffect, useState } from 'react';
import "./Home.css";
// import functions to store values from firebase official docs
import { collection, doc, deleteDoc, getDocs } from 'firebase/firestore';
// receive instances auth and provider from firebase.jsx
import { auth, db } from "../firebase";


const Home = () => {
const [postList, setPostList] = useState([]);

  // Set the second argument as an empty array to run the effect only once on initial mount.
  useEffect(()=>{
    // Define an async function
    const getPosts = async () => {
      // Get the documents from the "posts" collection and store them in the "data" variable.
      const data = await getDocs(collection (db,"posts"))

      console.log(data);
      console.log(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));

      // Extract value of firestore data and id using function "data()" (see official docs)
      // doc.id is not part of the Firestore document fields, so it must be added manually
      // 	"..." is the spread syntax to unpack the object returned by doc.data()
      setPostList(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    };
    // Call the function
    getPosts();
  }, [])

  // Define an async function with a parameter(id)
  const handleDelete = async (id) => {
    // Delete the documents with the given id from the "posts" collection.
    await deleteDoc(doc( db, "posts", id))
    // Redirect to home
    // JS native method: window.location.href → Reloads the page (login/logout state is reset)
    // React Router: navigate() → Keeps the login/logout state (recommended for SPA)
    window.location.href="/";
  }

  return (
    <div className="homePage">
      {postList.map((post)=>{
        return (
        // Key is needed to uniquely identify each element
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">
            {post.postsText}
          </div>
          <div className="nameAndDeleteButton">
            <h3>@{post.author.username}</h3>
            { /* auth, currentUser, and uid come from Firebase Authentication API */}
            { /* The optional chaining operator (?) prevents errors if currentUser is null or undefined */}
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
