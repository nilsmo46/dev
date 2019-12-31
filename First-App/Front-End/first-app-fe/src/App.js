import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ""
    };
  }

  handleTextChange = e => {
    this.setState({
      textValue: e.target.value
    });
  };

  handleDeploy = () => {
    const url = `http://localhost:3001/deploy?value=${this.state.textValue}`;
    axios.get(url).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleTextChange(e)} />
        <button onClick={this.handleDeploy}>Deploy</button>
      </div>
    );
  }
}

export default App;
