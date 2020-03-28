import React, { Component } from "react";

class Movie extends Component {
  state = {};

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const id = this.props.match.params.id;
    let result = "";
    if (id == 1)
      result = (
        <div>
          <h1>Terminator</h1>
          <p>Robots robots robots!!!!</p>
        </div>
      );
    else if (id == 2)
      result = (
        <div>
          <h1>Tremors</h1>
          <p>Big worms and kevin bacon is in it...</p>
        </div>
      );

    return (
      <div>
        {result}
        <button onClick={this.handleBack}>back</button>
      </div>
    );
  }
}

export default Movie;
