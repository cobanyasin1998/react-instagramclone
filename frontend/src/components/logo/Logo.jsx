import React, { useContext } from "react";
import "./logo.css";
import VectorLogo from "../../img/logo/Vector.png";
import { AuthContext } from "../../context/AuthContext";

const Logo = () => {
  return (
    <a href="/" style={{ display: "flex" }}>
      <img className="logo" src={VectorLogo} alt="LOGO" />
    </a>
  );
};

export default Logo;
