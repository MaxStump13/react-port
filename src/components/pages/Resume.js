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
				<section className="resume" style={styles.resumeStyle}>
					<h1 className="headings">My Skills</h1>
					<div className="container">
						<div className="smallContainer">
							<br></br>
							<a
								href={require("../assets/data/MaximilianStumpResume.pdf")}
								target="_blank"
								rel="noreferrer"
							>
								<button className="btn">Download My Resume Here</button>
							</a>
						</div>
						<div className="smallContainer">
							<ul>
								<br></br>
								<h3>Front-End Skills</h3>
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Responsive Web App Design</li>
								<li>React</li>
								<li>materialize</li>
								<li>interact</li>
								<li>Bootstrap</li>
							</ul>
						</div>
						<div className="smallContainer">
							<ul>
								<br></br>
								<h3>Back-End Skills</h3>
								<li>APIs</li>
								<li>NodeJS</li>
								<li>Express</li>
								<li>MySQL, Sequelize, Sessions</li>
								<li>MongoDB, Mongoose, Atlas</li>
								<li>Model View Controller</li>
								<li>Progressive Web Applications</li>{" "}
							</ul>
							<br></br>
						</div>
					</div>
				</section>
			</div>
		);
}
