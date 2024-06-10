import React from "react";
import "../index.css";
import prime from "../assets/prime.jpg";
import ContactPage from "./contact";
const AboutPage = () => {
  return (
    <div className="about">
      <img src= {prime} alt="" />
      <div id="de"> <h4>name:</h4>
      <p className="ab">Ozoani collins onyedika</p>
      <h4>email:</h4>
      <p className="ab">Primewrld@gmail.com</p>
      <h4>Role:</h4>
      <p className="ab">software engineer</p>
      <h4>phone:</h4>
      <p className="ab">+234 9078808551</p></div>
     
    </div>
  );
};

export default AboutPage;
