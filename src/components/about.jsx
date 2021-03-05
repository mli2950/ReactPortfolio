import React, { Component } from "react";
import Navbar from "./reusable/navbar";
import Footer from "./reusable/footer";
import AsherAndI from "../assets/images/rsz_1asherandicircle.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="outerContent">
          <div className="content">
            <img src={AsherAndI} />
            <h3>My name is Michael Li, I am a Wyoming native. I am currently enrolled in the University of Denver's Full-Stack Web Development course. Once finished, I hope to take my passion for web developing to a full-time position!</h3>
          </div>
            </div>
            <div>
                <Footer />
            </div>

      </div>
    );
  }
}

export default About;