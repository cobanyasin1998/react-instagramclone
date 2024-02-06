import React from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Post = () => {
  return (
    <div className="post-wrapper">
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
      <div className="post-img"></div>
      <div className="post-bottom"></div>
    </div>
  );
};

export default Post;
