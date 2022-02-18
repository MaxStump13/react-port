import React from "react";
const styles = {
    icon: {
        width: 80,
        height: 80,
        margin: 50,
        cursor: "pointer",
    },
};
export default function Footer() {
    return (
			<footer className="footer">
				<div>
					<div>
						<a href="https://github.com/MaxStump13" target="_blank">
							<img
								style={styles.icon}
								src={require("./assets/github.png")}
								alt="github"
								className="icon"
							></img>
						</a>
						<a
							href="https://www.linkedin.com/in/maximilian-stump-2aa6b01aa/"
							target="_blank"
						>
							<img
								style={styles.icon}
								src={require("./assets/linkedin.png")}
								alt="linkedin"
								className="icon"
							></img>
						</a>
						<a
							href="https://stackoverflow.com/users/17474802/maximilian-stump"
							target="_blank"
						>
							<img
								style={styles.icon}
								src={require("./assets/stackoverflow.png")}
								alt="linkedin"
								className="icon"
							></img>
						</a>
					</div>
				</div>
			</footer>
		);
}