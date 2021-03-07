import React, { Component } from "react";
import {Link} from "react-router-dom";
import Footer from "./reusable/Footer";
import MyResume from "../assets/Resume.pdf";
import footerClasses from "./footer.json"

class Resume extends Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <a className="navbar-brand">Michael Li</a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <p>
                    <Link to="/" className="nav-item nav-link">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/projects" className="nav-item nav-link">
                      Projects
                    </Link>
                  </p>
                  <p>
                    <Link to="/contact" className="nav-item nav-link">
                      Contact
                    </Link>
                  </p>
                  <p>
                    <Link to="/resume" className="nav-item nav-link active">
                      Resume
                    </Link>
                  </p>
                </div>
              </div>
            </nav>
            <div className="bg" />
            <div className="bg bg2" />
            <div className="bg bg3" />
            <main className="container" id="resume">
              <div className="row">
                <div className="col-lg-12">
                  <iframe src={MyResume} height="700px" width="100%" />
                </div>
              </div>
            </main>
            <Footer class={footerClasses[1].class} />
          </div>
        );

    }
}

export default Resume;