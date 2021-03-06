import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import AsherAndI from "./assets/images/rsz_1asherandicircle.png";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;