import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand">Michael Li</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="./index.html">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="./projects">Projects</a>
            <a className="nav-item nav-link" href="./contact.html">Contact</a>
            <a className="nav-item nav-link" href="./resume.html">Resume</a>
          </div>
        </div>
      </nav>
        )
    }
}

export default Navbar;