import React from "react";
import "./messenger.css";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import Button from "@mui/material/Button";
import ChatOnline from "../../components/chatonline/ChatOnline";

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input
            type="text"
            className="chat-menu-input"
            placeholder="Search For Friends"
          />
          <Conversation />
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <Message />
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-message-input"
              placeholder="Write-Something..."
            ></textarea>
            <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="chat-online">
        <div className="chat-online-wrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
