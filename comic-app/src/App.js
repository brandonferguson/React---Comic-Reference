import React, { Component } from "react";

let apiKey = "9f16f47974b9547b7c71317f3308c389645cd1c0";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      search: "",
      selectedCharacter: null
    };
  }

  /* async componentDidMount() {
    const res = await fetch(
      "https://comicvine.gamespot.com/api/characters/?api_key=9f16f47974b9547b7c71317f3308c389645cd1c0&format=json/"
    );
    const json = await res.json();
    this.setState({ character: json.results });
  }
  */

  onSearchChange = e => {
    this.setState({ search: e.target.valuie });
  };

  generateSearchResults = search => {
    if (search === "") {
      return [];
    } else {
      return this.state.character
        .filter(p => p.name.includes(search))
        .slice(0, 10);
    }
  };

  selectCharacter = async name => {
    const res = await fetch(
      `https://comicvine.gamespot.com/api/characters/?api_key=9f16f47974b9547b7c71317f3308c389645cd1c0&format=json&filter=name:${name}/`,
      { cache: "force-cache" }
    );
    const json = await res.json();
    this.setState({ selectedCharacter: json, seach: name });
  };

  render() {
    const results = this.generateSearchResults(this.state.search);

    return (
      <div className="App">
        <div className="search">
          <input
            onChange={this.onSearchChange}
            type="text"
            value={this.state.search}
          />
          <ul>
            {results.map(r => (
              <li onClick={() => this.selectCharacter(r.name)}>{r.name}</li>
            ))}
          </ul>
        </div>

        {this.state.selectedCharacter && (
          <div className="result">
            <img src={this.state.selectedCharacter.image} />
          </div>
        )}
        <header className="App-header">
          <img src="https://comicvine.gamespot.com/api/characters/?api_key=9f16f47974b9547b7c71317f3308c389645cd1c0&format=json&filter=name:Deadpool,image:icon_url" />
        </header>
      </div>
    );
  }
}

export default App;
