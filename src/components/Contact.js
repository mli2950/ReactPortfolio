import React, { Component } from "react";
import {Link} from "react-router-dom";
import Footer from "./reusable/Footer";
import footerClasses from "./footer.json"

class Contact extends Component {
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
                <Link to="/contact" className="nav-item nav-link active">
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
        <div className="container" id>
          <div className="contactContent">
            <form
              action="https://formspree.io/f/xvovyrnw"
              method="POST"
              id="my-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="emailContact" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={20}
                  defaultValue={""}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer class={footerClasses[0].class} />
      </div>
    );
  }
}

export default Contact;
