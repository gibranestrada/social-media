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
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/recoverpassword" component={RecoverPassword} />
      </Switch>
    </Router>
  );
};

export default App;
