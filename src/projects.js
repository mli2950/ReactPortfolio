import React, { Component } from "react";
import Navbar from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import "./App.css"

class Projects extends Component {
    state = {};

    render() {
        return (
            <div className="card-columns">
        <div className="card">
          <img className="card-img-top" src="./Assets/images/random-tech-quote-generator.png" alt="Random Tech Quote Generator" />
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
          <img className="card-img-top" src="./Assets/images/weather-dashboard.png" alt="Weather Dashboard" />
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
          <img className="card-img-top" src="./Assets/images/readmegenerator.png" alt="Readme Generator" />
          <div className="card-body">
            <h5 className="card-title">readme.md Generator</h5>
            <p className="card-text">A README generator created using Node.js, and inquirer.js</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework9---ReadMe-Generator" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://drive.google.com/file/d/1_bLeVhPsFdsynvQGVG58UoDBmIqI9H4v/view" target="_blank">Demonstration</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./Assets/images/floating-wildwood-05165.herokuapp.com_all.png" alt="Project Management Img" />
          <div className="card-body">
            <h5 className="card-title">Project Management Web Application</h5>
            <p className="card-text">Our application offers a project-management tool that allows users to track any ongoing projects for which they are responsible and create new projects.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/nickkeller316/project2" target="blank">Repository</a>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#656567', color: 'white'}} href="https://floating-wildwood-05165.herokuapp.com/all" target="_blank">Live Website</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./Assets/images/work-day-scheduler.png" alt="Workday Scheduler" />
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
          <img className="card-img-top" src="./Assets/images/EmployeeTracker.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Command-line Team Profile Generator</h5>
            <p className="card-text">This project is a command-line application that generates an HTML page and displays all of the team members and information that the user inputs.</p>
            <a className="btn btn-large pull-right" style={{backgroundColor: '#F79D8C'}} href="https://github.com/mli2950/Homework-10" target="blank">Repository</a>
            <a className="btn btn-large pull-right" id style={{backgroundColor: '#656567', color: 'white'}} href="https://drive.google.com/file/d/1fTLDwRokQiOXDNx1oOI3icQG_3A78Qai/view" target="_blank">Demonstration</a>
          </div>
        </div>
      </div>
        )
    }
}

export default Projects;