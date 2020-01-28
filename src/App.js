import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Signout from "./Signout.js";
import Signup from "./Signup.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
