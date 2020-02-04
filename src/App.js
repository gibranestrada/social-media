import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Signout from "./Signout.js";
import Signup from "./Signup.js";
import RecoverPassword from "./RecoverPassword.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
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
        <Route path="/signout">
          <Signout />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/recoverpassword">
          <RecoverPassword />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
