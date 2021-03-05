import React from "react";
import About from "./components/about";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import Projects from "./components/projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
