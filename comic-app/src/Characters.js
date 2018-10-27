import React, { Component } from "react";
import "./index.css";

let apikey = "c91f99ccbccb1552c77fdefabe41a66e";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      offsetCount: 0
    };
  }

  async componentDidMount() {
    const characters = await fetch(
      `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}`
    );
    const json = await characters.json();
    this.setState({ characters: json.data.results });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.offsetCount !== this.state.offsetCount) {
      const characters = await fetch(
        `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&offset=${
          this.state.offsetCount
        }`
      );
      const json = await characters.json();
      this.setState({ characters: json.data.results });
    }
  }

  decrementOffset = () => {
    this.setState({ offsetCount: this.state.offsetCount - 20 });
  };

  incrementOffset = () => {
    this.setState({ offsetCount: this.state.offsetCount + 20 });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="row">
        {characters.map(c => (
          <div className="card col-sm-3">
            {c.name}
            <img
              src={
                c.thumbnail.path + "/standard_medium." + c.thumbnail.extension
              }
              className="thumbnail"
            />
          </div>
        ))}
        <div className="buttons">
          <button
            type="button"
            className="prev btn btn-primary"
            onClick={this.decrementOffset}
          >
            Prev
          </button>
          <button
            type="button"
            className="next btn btn-primary"
            onClick={this.incrementOffset}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Characters;
