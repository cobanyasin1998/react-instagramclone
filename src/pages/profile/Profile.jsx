import React from "react";
import "./profile.css";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../img/avatar/avatar.png";
import Button from "@mui/material/Button";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

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
              <span className="profile-username">yasiincoban</span>
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
            <div className="head-right-center">center</div>
            <div className="head-right-bottom">bottom</div>
          </div>
        </div>
        <div className="profile-body"></div>
      </div>
    </div>
  );
};

export default Profile;
