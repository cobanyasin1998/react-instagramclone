import React from "react";
import "./chatonline.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";

const ChatOnline = () => {
  return (
    <div className="chat-online">
      <h4>Online Users</h4>
      <div className="chat-online-friend">
        <div className="chat-online-img-container">
          <Avatar
            alt="Avatar Image"
            src={AvatarImg}
            sx={{ width: 28, height: 28 }}
          />
          <span className="chat-online-badge"></span>
        </div>
        <div className="chat-online-name">yasiincoban</div>
      </div>
    </div>
  );
};

export default ChatOnline;
