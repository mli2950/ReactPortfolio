import React, { Component } from "react";
import Navbar from "./reusable/navbar";
import Footer from "./reusable/footer";
import AsherAndI from "../assets/images/rsz_1asherandicircle.png"

class About extends Component {
    state = {};

    render() {
        return (
            <div>
        
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand">Michael Li</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link " href="./projects">Projects</a>
            <a className="nav-item nav-link" href="./contact.html">Contact</a>
            <a className="nav-item nav-link" href="./resume.html">Resume</a>
          </div>
        </div>
      </nav>
        
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="outerContent">
          <div className="content">
            <img src={AsherAndI} class="aboutImage"/>
            <h3>My name is Michael Li, I am a Wyoming native. I am currently enrolled in the University of Denver's Full-Stack Web Development course. Once finished, I hope to take my passion for web developing to a full-time position!</h3>
          </div>
            </div>
            <div>
                <Footer />
            </div>

      </div>
        )
    }
}

export default About;