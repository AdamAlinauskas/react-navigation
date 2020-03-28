import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <div style={{ marginTop: 30 }}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/movies/:id" component={Movie} />
          <Route path="/movies" component={MovieList} />
          <Route exact path="/" component={Home} />
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>

      <div>footer</div>
    </main>
  );
}

export default App;
