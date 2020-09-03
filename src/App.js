import React, { Component } from "react";
import "./App.css";
import Button from "./components/PressButton";
import InputData from "./components/InputData";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }
  addInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  makeClear = (val) => {
    this.setState({ input: "" });
  };
  inputZero = (val) => {
    if (this.state.input === "") {
      this.setState({ input: "" });
    } else {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimal = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  addNumber = (val) => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };
  subNumber = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "sub";
  };
  mulNUmber = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "mul";
  };

  divNumber = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "div";
  };

  makeEqual = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator == "sub") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator == "mul") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator == "mul") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="Wrapper">
          <div className="row">
            <InputData>{this.state.input}</InputData>
          </div>
          <div className="row">
            <Button onHandle={this.addInput}>7</Button>
            <Button onHandle={this.addInput}>8</Button>
            <Button onHandle={this.addInput}>9</Button>
            <Button onHandle={this.divNumber}>/</Button>
          </div>
          <div className="row">
            <Button onHandle={this.addInput}>4</Button>
            <Button onHandle={this.addInput}>5</Button>
            <Button onHandle={this.addInput}>6</Button>
            <Button onHandle={this.mulNUmber}>*</Button>
          </div>
          <div className="row">
            <Button onHandle={this.addInput}>1</Button>
            <Button onHandle={this.addInput}>2</Button>
            <Button onHandle={this.addInput}>3</Button>
            <Button onHandle={this.addNumber}>+</Button>
          </div>
          <div className="row">
            <Button onHandle={this.addDecimal}>.</Button>
            <Button onHandle={this.inputZero}>0</Button>
            <Button onHandle={this.makeEqual}>=</Button>
            <Button onHandle={this.subNumber}>-</Button>
          </div>
          <div className="row">
            <ClearButton onClear={this.makeClear}></ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
