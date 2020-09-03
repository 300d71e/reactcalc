import React, { Component } from "react";
import "./InputData.css";

class InputData extends Component {
  render() {
    return <div className="input">{this.props.children}</div>;
  }
}

export default InputData;
