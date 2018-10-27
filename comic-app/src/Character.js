import React, { Component } from "react";
import "./index.css";

let apikey = "c91f99ccbccb1552c77fdefabe41a66e";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  async componentDidMount() {
    const character = await fetch(
      `http://gateway.marvel.com/v1/public/characters/1009610?apikey=${apikey}`
    );
    const json = await character.json();
    this.setState({ character: json.data.results });
  }

  render() {
    const { character } = this.state;

    return (
      <div>
        {character.map(c => (
          <div className="mainDiv">
            <div className="header">
              <h1>{c.name}</h1>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4>Description:</h4>
                <p>{c.description}</p>
              </div>
              <div className="mainImage col-sm-6">
                <img
                  src={
                    c.thumbnail.path +
                    "/portrait_uncanny." +
                    c.thumbnail.extension
                  }
                  alt={c.name}
                  align="right"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Character;
