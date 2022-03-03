import React from "react";
import Nav from "../Navbar";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="hero-image">
      <div className="content">
        <a href="/">
          <span className="title">the Marecchia</span>
        </a>
        <span>Saint Paul Academy's second most respected news source.</span>
      </div>
      <Nav />
    </div>
  );
};

export default Hero;
