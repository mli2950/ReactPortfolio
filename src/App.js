import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import AsherAndI from "./assets/images/rsz_1asherandicircle.png";
import Projects from "./components/projects";
import About from "./components/about";
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/' component={About} />
      </Switch>
    </Router>
  );
}

export default App;