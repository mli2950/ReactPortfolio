import React, { Component } from "react";
import Navbar from "./reusable/navbar";
import Footer from "./reusable/footer";
import RandomQuote from "../assets/images/random-tech-quote-generator.png"
import EmployeeTracker from "../assets/images/EmployeeTracker.png"
import ReadMeGen from "../assets/images/readmegenerator.png"
import Weather from "../assets/images/weather-dashboard.png"
import WorkDay from "../assets/images/work-day-scheduler.png"
import ProjectManager from "../assets/images/floating-wildwood-05165.herokuapp.com_all.png"
import footerClasses from "./footer.json"


class Projects extends Component {
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
            <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="./projects">Projects</a>
            <a className="nav-item nav-link" href="./contact">Contact</a>
            <a className="nav-item nav-link" href="./resume">Resume</a>
          </div>
        </div>
      </nav>

          <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
            <div className="card-columns">
        <div className="card">
          <img className="card-img-top" src={RandomQuote} alt="Random Tech Quote Generator" />
          <div className="card-body">
            <h5 className="card-title">Random Tech Quote &amp; Image Calendar</h5>
            <p className="card-text">This is my first team project, a calendar that displays
              random tech based quotes and images using HTML, CSS, JS and
              API calls.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/njleoni/project_random_quotes" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://njleoni.github.io/project_random_quotes/" target="_blank">Live Website</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={Weather} alt="Weather Dashboard" />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text"> A website I created that displays current and 5 day
              forecasts using HTML, CSS, Javascript and using API's to
              retrieve data.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework6-Weather-API" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://mli2950.github.io/Homework6-Weather-API/" target="_blank">Live Website</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={ReadMeGen} alt="Readme Generator" />
          <div className="card-body">
            <h5 className="card-title">readme.md Generator</h5>
            <p className="card-text">A README generator created using Node.js, and inquirer.js</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework9---ReadMe-Generator" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://drive.google.com/file/d/1_bLeVhPsFdsynvQGVG58UoDBmIqI9H4v/view" target="_blank">Demonstration</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={ProjectManager} alt="Project Management Img" />
          <div className="card-body">
            <h5 className="card-title">Project Management Web Application</h5>
            <p className="card-text">Our application offers a project-management tool that allows users to track any ongoing projects for which they are responsible and create new projects.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/nickkeller316/project2" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://floating-wildwood-05165.herokuapp.com/all" target="_blank">Live Website</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={WorkDay} alt="Workday Scheduler" />
          <div className="card-body">
            <h5 className="card-title">Workday Scheduler</h5>
            <p className="card-text">A website I created that shows times throughout the work
              day, and color codes them appropriately based on whether
              that time is in the future, current, or past. Time slots
              save any input.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework-5---Day-Scheduler" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://mli2950.github.io/Homework-5---Day-Scheduler/" target="_blank">Live Website</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={EmployeeTracker} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Command-line Team Profile Generator</h5>
            <p className="card-text">This project is a command-line application that generates an HTML page and displays all of the team members and information that the user inputs.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework-10" target="blank">Repository</a>
            <a className="btn btn-large pull-right" id style={{backgroundColor: '#656567', color: 'white'}} href="https://drive.google.com/file/d/1fTLDwRokQiOXDNx1oOI3icQG_3A78Qai/view" target="_blank">Demonstration</a>
          </div>
        </div>
      </div>
      <Footer class={footerClasses[1].class}/>
      </div>
        )
    }
}

export default Projects;