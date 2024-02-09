import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import { Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

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
        <div className="account-titles">
          <a href="/">yasiincoban</a>
          <span>Yasin Çoban</span>
        </div>
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
            <div className="friend-username">
              <a href="/">yasiincoban</a>
              <span>Yasin Çoban</span>
            </div>
          </div>
          <div className="friend-item-right">
            <Button
              variant="contained"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              size="small"
            >
              Profile Git
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RightBox;
