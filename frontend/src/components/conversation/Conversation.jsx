import React from "react";
import "./conversation.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";

const Conversation = () => {
  return (
    <div className="conversation">
      <Avatar
        className="conversation-img"
        alt="Avatar Image"
        src={AvatarImg}
        sx={{ width: 28, height: 28 }}
      />
      <div className="conversation-name">yasiincoban</div>
    </div>
  );
};

export default Conversation;
