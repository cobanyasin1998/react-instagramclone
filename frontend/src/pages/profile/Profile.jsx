import React from "react";
import "./profile.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import Button from "@mui/material/Button";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AccountBoxOutlined,
  BookmarkAddOutlined,
  GridOnOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import Post from "../../components/post/Post";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-head">
          <div className="head-left">
            <Avatar
              alt="Avatar Image"
              src={AvatarImg}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="head-right">
            <div className="head-right-top">
              <span className="profile-page-username">yasiincoban</span>
              <div className="profile-page-buttons">
                <Button variant="contained" size="small">
                  Düzenle
                </Button>
                <button>
                  <SettingsOutlinedIcon />
                </button>
                <button>
                  <LogoutOutlinedIcon color="error" />
                </button>
              </div>
            </div>
            <div className="head-right-center">
              <div className="post-count">
                <b>1</b>
                <span>posts</span>
              </div>
              <div className="follower-count">
                <b>1</b>
                <span>followers</span>
              </div>
              <div className="following-count">
                <b>1</b>
                <span>following</span>
              </div>
            </div>
            <div className="head-right-bottom">
              <b>yasiincoban</b>
              <span>I am a Full-Stack Web Developer</span>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-nav-tabs">
            <button className="active">
              <GridOnOutlined />
              <span>POSTS</span>
            </button>
            <button>
              <VideoLibraryOutlined />
              <span>VIDEOS</span>
            </button>
            <button>
              <BookmarkAddOutlined />
              <span>SAVE</span>
            </button>
            <button>
              <AccountBoxOutlined />
              <span>TAGGED</span>
            </button>
          </div>
          <div className="profile-post-grid">
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon active" />
                <b>1</b>
              </div>
            </div>
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon active" />
                <b>1</b>
              </div>
            </div>
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon active" />
                <b>1</b>
              </div>
            </div>
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon active" />
                <b>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
