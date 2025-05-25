import React from 'react'
import "./Home.css";

const Home = () => {
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
