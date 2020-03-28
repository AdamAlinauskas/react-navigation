import React, { Component } from "react";

class Home extends Component {
  componentWillUnmount() {
    console.log("home componentWillUnmount");
  }
  state = {};
  render() {
    return <h1>Home page</h1>;
  }
}

export default Home;
