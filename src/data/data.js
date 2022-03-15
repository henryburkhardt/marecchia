import React, { Component } from "react";
import data from "./blog.json";

class DataExport extends Component {
  render() {
    return <>{JSON.stringify(data)}</>;
  }
}

export default DataExport;
