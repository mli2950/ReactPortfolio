import React, { Component } from "react";
import {Link} from "react-router-dom";
import Footer from "./reusable/Footer";
import AsherAndI from "../assets/images/rsz_1asherandicircle.png"
import footerClasses from "./footer.json"

class About extends Component {
    state = {};

    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <a className="navbar-brand">Michael Li</a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <p>
                    <Link to="/" className="nav-item nav-link active">
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
                    <Link to="/resume" className="nav-item nav-link">
                      Resume
                    </Link>
                  </p>
                </div>
              </div>
            </nav>

            <div className="bg" />
            <div className="bg bg2" />
            <div className="bg bg3" />
            <div className="outerContent">
              <div className="content">
                <img src={AsherAndI} class="aboutImage" />
                <h3>
                  My name is Michael Li, I am a Wyoming native. I am currently
                  enrolled in the University of Denver's Full-Stack Web
                  Development course. Once finished, I hope to take my passion
                  for web developing to a full-time position!
                </h3>
              </div>
            </div>
            <div>
              <Footer class={footerClasses[0].class} />
            </div>
          </div>
        );
    }
}

export default About;