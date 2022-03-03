import React, { Component } from "react";
class Election extends Component {
  render() {
    return (
      <div className="election">
        <h3>Live Election Coverage (starting April 1)</h3>
        <img
          src={require("./DOS.png")}
          width="50%"
          style={{ display: "block" }}
          alt="Can't Load Image"
        ></img>
      </div>
    );
  }
}

export default Election;
