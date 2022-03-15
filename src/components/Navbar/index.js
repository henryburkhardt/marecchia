import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <Link className=" link" to="/">
          Home
        </Link>
        <Link to="/electioncoverage" className="link">
          Election Coverage
        </Link>
        <Link to="/dailydan" className="link">
          Daily Dan
        </Link>
        <Link to="/monotracker" className="link">
          Mono Tracker
        </Link>
        {/* <Link to="/mardle" className="link">
          Mardle
        </Link> */}
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    );
  }
}
