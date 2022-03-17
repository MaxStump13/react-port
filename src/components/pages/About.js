import React from "react";
import img from "../assets/profile-picture.png";
import "../../styles/Aboutme.css";

const styles = {
	aboutStyle: {
		display: "flex",
		flexDirection: "column",
		boxSizing: "border-box",
		padding: "20px",
		marginBottom: "50px",
	},
};

export default function About() {
	return (
		<section className="container" style={styles.aboutStyle}>
			<h1 className="headings">About Me</h1>
			<div className="pic">
				<img src={img} alt="profile picture" />
				<div className="intro">
					<h2>Max</h2>
					<p>
						Hello, this is my portfolio of my projects. My name is Maximilian,
						but I go by Max. I graduated from Penn State with a nuclear
						engineering degree in 2020. During the pandemic, I 
						found my passion in coding. I decided to
						change paths and pursue a career in web development. In November of 2021, I enrolled into
						a coding bootcamp at the University of Penn. Through this bootcamp,
						I learned the skills to become a full-stack web developer, such as JavaScript, Express, Node.js, MySQL, MongoDB, React, and GraphQL.
						I have learned to apply both front-end
						and back-end code to webpages. All the applications I have
						created are deployed using GitHub and heroku. The main goal
						of my applications is 	functionality and user expierence. A few examples of my
						work can be found in the portfolio tab. If you are interested in 
            any of their repositories or deployed sites, the links are provided.
					</p>
				</div>
			</div>
		</section>
	);
}
