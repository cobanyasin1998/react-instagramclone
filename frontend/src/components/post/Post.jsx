import React from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostImg from "../../img/post/3.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = ({ top, bottom }) => {
  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar
                alt="Avatar Image"
                src={AvatarImg}
                sx={{ width: 28, height: 28 }}
              />
            </a>
            <a href="/" className="profile-username">
              yasiincoban
            </a>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      )}
      <div className="post-img">
        <img src={PostImg} alt="Post Image" />
      </div>
      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button>
              <FavoriteIcon className="post-like-icon active" />
            </button>
            <span className="post-like-count">0 Like</span>
          </div>

          <div className="post-content">
            <a href="/" className="profile-username">
              yasiincoban
            </a>{" "}
            <span className="post-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ea
              enim doloribus saepe aut fugit recusandae architecto dignissimos
              dicta cum?
            </span>
          </div>

          <div className="post-time">1 dakika önce</div>
        </div>
      )}
    </div>
  );
};

export default Post;
