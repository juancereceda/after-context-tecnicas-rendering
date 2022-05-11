import React from "react";
import { Link } from "react-router-dom";

import FootballLogo from "../../assets/football.png";
import "./Brand.css";

const Brand = () => {
  return (
    <Link to="/" className="flex-container">
      <h1>Football Store!</h1>
      <img src={FootballLogo} alt="Logo" className="brand-logo" />
    </Link>
  );
};

export default Brand;
