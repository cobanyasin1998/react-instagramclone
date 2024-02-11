import React from "react";
import "./logo.css";
import VectorLogo from "../../img/logo/Vector.png";

const Logo = () => {
  return (
    <a href="/" style={{ display: "flex" }}>
      <img className="logo" src={VectorLogo} alt="LOGO" />
    </a>
  );
};

export default Logo;
