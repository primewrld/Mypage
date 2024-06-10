import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";
import robo from "../assets/robo.jpeg"
const Header = () => {
  const links = [
    {
      label: "home",
      url: "/",
    },
    { label: "Contact", url: "/Contact" },
    { label: "About", url: "/About" },
  ];
  return (
    <>
    <nav className="nav">
      <img src={logo} alt="logo" height="200px" />
      {links.map(({ label, url }) => (
        <Link to={url} key={url}>
          {label}
        </Link>
      ))}
      <button className="con">Contact Us
      </button>
    </nav>
    <div className="head">
      <div><h1>Prime Technologies</h1>
    <h5>enjoy our cutting-edge, leading technology solutions in various fields like AI, robotics, cybersecurity, cloud engineering, etc...</h5>
    <button>Services</button></div>
    <div><img src={robo} alt="robo" /></div>
    
    </div>
    </>
  );
};

export default Header;
