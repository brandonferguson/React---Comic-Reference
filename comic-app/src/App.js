import React, { Component } from "react";
import Characters from "./Characters";
import Character from "./Character";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Characters />
        </div>
      </div>
    );
  }
}

export default App;
