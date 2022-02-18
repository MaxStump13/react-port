import React from "react";
import '../styles/Project.css';

const styles ={
    largepicStyle: {
    padding: '12px',
    width:'570px',
    height:'400px',
    margin: '15px',
    },
  }

export default function PortfolioCard(props) {
    return (
        <div>
            <div className="img-container">

                <img alt={props.name} src={props.image} className="largepic" style={styles.largepicStyle}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong><b>Name:</b></strong> {props.name}
                    </li>
                    <li>
                        <strong><b>Languages:</b></strong> {props.topics}
                    </li>
                    <li>
                        <a href={props.deploy} target="_blank"><strong>Here is the Deployed Site</strong></a>
                    </li>
                    <li>
                        <a href={props.github} target="_blank"><strong>Here is the Repo</strong></a>
                    </li>

                </ul>
            </div>

        </div>
    );
}