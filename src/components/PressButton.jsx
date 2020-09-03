import React, { Component } from "react";
import "./PressButton.css";

class PressButton extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? "" : "ope"
        } `}
        onClick={() => {
          this.props.onHandle(this.props.children);
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PressButton;
