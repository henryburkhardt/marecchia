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
        <div class="subtitle">
          Saint Paul Academy's second most respected news source.
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Hero;
