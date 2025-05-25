import React, { useEffect } from 'react';
import "./Home.css";
import { db } from "../firebase";
import { collection, doc, getDocs } from 'firebase/firestore';


const Home = () => {
  // 一度だけ発火のため、第二引数は空にする
  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(collection (db,"posts"))

      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc)=>({ doc })));
      // データ関数.data(),スプレッド構文
            console.log(data.docs.map((doc)=>({ ...doc.data(),id: doc.id })));
    };
    getPosts();
  }, [])
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      <div className="postTextContainer">
        今はReactを勉強中です。今はReactを勉強中です。今はReactを勉強中です。今はReactを勉強中です。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@Minami</h3>
        <button>Delete</button>
      </div>

      </div>

    </div>
  )
}

export default Home;
