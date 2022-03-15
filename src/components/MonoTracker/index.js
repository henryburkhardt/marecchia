import React, { Component } from "react";
import monoVid from "./monoTracker.mp4";
class MonoTracker extends Component {
  render() {
    return (
      <div className="election">
        <h3>Mono Tracker</h3>
        <h6>
          The Marecchia recently aquired state of the art technology allowing us
          to indentify and track students on campus infected with Mono.
        </h6>
        <video ref="video" className="videoTag" autoPlay loop muted>
          <source src={monoVid} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default MonoTracker;
