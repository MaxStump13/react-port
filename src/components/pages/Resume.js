import React from "react";
import '../../styles/Resume.css';

const styles ={
  resumeStyle: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '20px',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
}

export default function Resume() {
    return (
        <div>
            <section className ='resume' style={styles.resumeStyle}>
              <h1 className="headings">My Skills</h1>
              <div className="container">
              
                <div className="subcontainer">
                  <br></br>
                    <h3>Resume</h3>
                    <a href={require("../assets/data/MaxStumpWebDevResume.pdf")} target="_blank" rel='noreferrer'>
                      <button className="btn">Download My Resume</button>
                    </a>
                </div>
                <div className="subcontainer">
                  <ul>
                    <br></br>
                    <h3>Front-End Skills</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="subcontainer">
                    <ul>
                      <br></br>
                      <h3>Back-End Skills</h3>
                      <li>APIs</li>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>MySQL, Sequelize</li>
                      <li>MongoDB, Mongoose</li>
                      <li>Model View Controller</li>
                      <li>REST</li>
                      <li>Progressive Web Applications</li>{" "}
                    </ul>
                    <br></br>
                  </div>
              </div>
            </section>
        </div>
    );
}
