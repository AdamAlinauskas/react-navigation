import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <table border="1">
        <thead className="table table-striped ">
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/movies/1">Terminator</Link>
            </td>
            <td>Movie about fun robots</td>
          </tr>
          <tr>
            <td>
              <Link to="/movies/2">Tremors</Link>
            </td>
            <td>Hanging out at the casino</td>
          </tr>
          <tr>
            <td>Boss Baby</td>
            <td>ApParently it's good</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieList;
