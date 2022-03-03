import data from "./dan.json";
import React, { Component } from "react";
class DailyDan extends Component {
  render() {
    let index = Math.floor(Math.random() * 32);
    let dan = data.data[index];

    return (
      <div className="dan">
        <h3>The Daily Dan</h3>
        <h3 className="blog-post-text">{dan}</h3>
        <h4 className="blog-post-text">
          - Former Vice President{" "}
          <a href="https://en.wikipedia.org/wiki/Dan_Quayle">Dan Quayle</a>
        </h4>
      </div>
    );
  }
}

export default DailyDan;
