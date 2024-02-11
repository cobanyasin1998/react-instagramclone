import React, { useState } from "react";
import "./share.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import PostImg from "../../img/post/3.jpg";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
import AddPhotoOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const Share = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <div className="modal-head">
            <Typography variant="span">Create A Post</Typography>
          </div>
          <div className="modal-body">
            <div className="modal-body-top">
              <Avatar
                alt="Avatar Image"
                src={AvatarImg}
                sx={{ width: 46, height: 46 }}
              />
              <input
                type="text"
                className="modal-text-input"
                placeholder="Write a post..."
              />
              <Button type="submit" variant="contained" height="10px">
                Paylaş
              </Button>
            </div>
            <div className="modal-buttons">
              <button>
                <AddPhotoOutlinedIcon />
                <b>Photo</b>
              </button>
              <button>
                <VideoLibraryOutlinedIcon />
                <b>Video</b>
              </button>
              <button>
                <CalendarMonthOutlinedIcon />
                <b>Etkinlik</b>
              </button>
              <button>
                <ShortTextIcon />
                <b>Yazı Yaz</b>
              </button>
            </div>
            <div className="share-img-wrapper">
              <img src={PostImg} alt="Post Image" />
              <CancelOutlinedIcon className="cancel-icon" color="error" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Share;
