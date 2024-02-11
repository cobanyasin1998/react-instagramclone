import React from "react";
import "./home.css";
import Post from "../../components/post/Post";
import RightBox from "../../components/rightBox/RightBox";
const Home = () => {
  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            <Post top bottom />
            <Post top bottom />
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
