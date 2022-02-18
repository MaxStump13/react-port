import React from 'react';
import img from "../assets/profile-picture.png";
import '../../styles/Aboutme.css';

const styles ={
  aboutStyle: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '20px',
    marginBottom: '50px',
  },
}

export default function About() {
  return (
		<section className="container" style={styles.aboutStyle}>
			<h1 className="headings">About Me</h1>
			<div className="pic">
				<img src={img} alt="unavailable"/>
				<div className="intro">
					<h2>Max</h2>
					<p>
						Hello, this is my portfolio of my projects. My name is Maximilian,
						but I go by Max. I graduated from Penn State with a nuclear
						engineering degree in 2020. Due to the pandemic, I have struggled
						finding a career in the nuclear energy field. In my free time, I
						tried some free coding courses online and loved it. I decided to
						change paths and pursue coding. In November of 2021, I enrolled into
						a coding bootcamp at the University of Penn. Through this bootcamp,
						I am learning the skills to become a full-stack web developer. So
						far in my coding bootcamp, I have learned to apply HTML and CSS to
						webpages. I have also learned how to deploy my created projects
						using GitHub. More recently, I have been utilizing JavaScript and
						some of its libraries and frameworks. With the help of third party
						APIs, I have been able to develop applications with live data. A few
						examples are down below in my work section. If you are interested in
						any of their repositories or deployed sites, click on the image for
						the links.
					</p>
				</div>
			</div>
		</section>
	);
}
