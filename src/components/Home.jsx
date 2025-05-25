import React, { useEffect, useState } from 'react';
import "./Home.css";
import { db } from "../firebase";
import { collection, doc, deleteDoc, getDocs } from 'firebase/firestore';


const Home = () => {
const [postList, setPostList] = useState([]);

  // 一度だけ発火のため、第二引数は空にする
  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(collection (db,"posts"))
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc)=>({ doc })));
      // データ関数.data(),スプレッド構文
      console.log(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));

      setPostList(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));
    };
    getPosts();
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id))
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
            <button onClick={()=> handleDelete(post.id)}>Delete</button>
          </div>
        </div>
        )

      })}


    </div>
  )
}

export default Home;
