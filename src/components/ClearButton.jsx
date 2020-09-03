import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return (
      <div
        className="clear"
        onClick={() => this.props.onClear(this.props.children)}
      >
        C
      </div>
    );
  }
}
export default ClearButton;
