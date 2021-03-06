import React from "react";

const styles ={
    homeStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
    },
    mainStyle:{
        fontSize: '75px',
        fontWeight: '600',
        top:'10%',
    },
    textStyle:{
        color: 'white',
    },
    spanStyle:{
        color:'white',
        fontWeight:'800',

    }
  }

  export default function Header() {
  return (
		<div
			style={{
				backgroundImage:
					'url("https://raw.githubusercontent.com/MaxStump13/professional-portfolio/main/assets/images/background.jpg")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="home" id="container" style={styles.homeStyle}>
				<div className="main" style={styles.mainStyle}>
					<h2 className="text" style={styles.textStyle}>
						Hi, My name is Maximilian, but i go by Max.
					</h2>

					<h2 className="text" style={styles.textStyle}>
						I am a{" "}
						<span className="span" style={styles.spanStyle}>
							Full Stack Web Developer
						</span>
					</h2>
				</div>
			</div>
		</div>
	);
}

