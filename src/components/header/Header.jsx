import React from "react";
import "./header.css";
import Logo from "../logo/Logo";
import AvatarImg from "../../img/avatar/avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Avatar from "@mui/material/Avatar";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <div className="search">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-lists">
            <a href="/">
              <HomeOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <ChatOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <AddBoxOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <Avatar
                alt="Avatar Image"
                src={AvatarImg}
                sx={{ width: 28, height: 28 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
