import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";

import "./rightbox.css";
const RightBox = () => {
  return (
    <div className="right-box">
      <div className="account">
        <a href="">
          <Avatar
            alt="Avatar Image"
            src={AvatarImg}
            sx={{ width: 28, height: 28 }}
          />
        </a>
        <a href="/" className="account-titles">
          <a href="/">yasiincoban</a>
        </a>
      </div>
      <span className="friends-title">My Friends</span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar
                alt="Avatar Image"
                src={AvatarImg}
                sx={{ width: 28, height: 28 }}
              />
            </a>
          </div>
          <div className="friend-item-right"></div>
        </li>
      </ul>
    </div>
  );
};

export default RightBox;
