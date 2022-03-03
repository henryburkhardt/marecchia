import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <Link className=" link" to="/">
          Home
        </Link>
        <Link to="/opinion" className="link">
          Opinion
        </Link>
        <Link to="/feature" className="link">
          Feature
        </Link>
        <Link to="/dailydan" className="link">
          Daily Dan
        </Link>
        <Link to="/campaigncoverage" className="link">
          Campaign Coverage
        </Link>
        <Link to="/monotracker" className="link">
          Mono Tracker
        </Link>
        <Link to="/mardle" className="link">
          Mardle
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    );
  }
}
