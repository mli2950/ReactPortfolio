import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About"
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
