import React, { Component } from "react";

let apiKey = "9f16f47974b9547b7c71317f3308c389645cd1c0";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: []
    };
  }

  async componentDidMount() {
    const character = await fetch(
      "https://comicvine.gamespot.com/api/characters/?api_key=9f16f47974b9547b7c71317f3308c389645cd1c0&format=json/"
    );
    const json = await character.json();
    this.setState({ character: json.results });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" />
          <p />
        </div>
      </div>
    );
  }
}

export default App;
