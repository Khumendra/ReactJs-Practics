import React, { Component } from "react";

class App extends Component {
  constructor(prpos) {
    super(prpos);

    // State

    this.state = {
      message: "Off",
      img_url: "https://www.w3schools.com/js/pic_bulboff.gif",
    };
  }

  handleGreetingOff = () => {
    this.state = this.setState({
      message: "Off",
      img_url: "https://www.w3schools.com/js/pic_bulboff.gif",
    });
  };

  handleGreetingOn = () => {
    this.state = this.setState({
      message: "On",
      img_url: "https://www.w3schools.com/js/pic_bulbon.gif",
    });
  };

  render() {
    return (
      <div align="center">
        <h1>Bulb [{this.state.message}] </h1>
        <img src={this.state.img_url} />
        <p>{this.state.message}</p>
        <button
          onClick={this.handleGreetingOn}
          style={{
            border: "white",
            backgroundColor: "yellow",
            padding: "5px 30px",
            marginRight: "5px",
          }}
        >
          On
        </button>
        <button
          onClick={this.handleGreetingOff}
          style={{
            border: "white",
            backgroundColor: "",
            padding: "5px 30px",
          }}
        >
          Off
        </button>
      </div>
    );
  }
}

export default App;
