import data from "./dan.json";
import React, { Component } from "react";
class DailyDan extends Component {
  render() {
    let index = Math.floor(Math.random() * 32);
    let dan = data.data[index];

    return (
      <div className="dan">
        <h1>The Daily Dan</h1>
        <h3 className="blog-post-text">{dan}</h3>
        <h4 className="blog-post-text">-Dan Quayle</h4>
      </div>
    );
  }
}

export default DailyDan;
