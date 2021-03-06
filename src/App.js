import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
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
    <div classname="App">
      <HashRouter basename="/projects">
    
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;