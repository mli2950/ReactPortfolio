import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <div>
         
        <Route exact path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />

    </div>
    </Router>
  );
}

export default App;