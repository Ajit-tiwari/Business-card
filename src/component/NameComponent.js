import React from "react";
import emailIcon from "../images/emailIcon.webp"
import projectIcon from "../images/projectImage.jpg"


function ProjectList(){
    return (<h2>From Project list</h2>)
}

export default function Name(){
    return (
        <div className="Name">
            <h1>Ajit Tiwari</h1>
            <h2>System Engineer</h2>
            <div className="name-button">
                {/* <button className="email">
                    <img src={emailIcon}></img>
                    <h2>Email</h2>
                </button>
                <button className="project-demo">
                    <img src={projectIcon}></img>
                    <h2>Projects</h2>
                </button> */}
            </div>
        </div>
    )
}