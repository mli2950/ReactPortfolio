import React, { Component } from "react";
import Github from "../../assets/images/icons8-github-104.png";
import LinkedIn from "../../assets/images/icons8-linkedin-96.png";

class Footer extends Component {
  state = {};
  render() {
    return (
        <div class="container">
            
            <div class="row footer-icon-wrapper fixed-bottom ">
          <div class="col-sm-4">
            <p id="phone">307.262.4402</p>
          </div>
                <div class="col-sm-4" style={{ textAlign: "center"}}>
            <a href="https://github.com/mli2950" target="_blank">
              <img class="footer-icon" src={Github} alt="Github" />
            </a>

            <a
              href="https://www.linkedin.com/in/michael-li-6a156799/"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn" class="footer-icon" />
            </a>
          </div>
          <div class="col-sm-4">
            <p id="email">Mli2950@gmail.com</p>
          </div>
                </div>

      </div>
    );
  }
}

export default Footer;
