import React from "react";


export default function Skill(){
    let skills = ['C++','Python','JavaScript','Node.js','Jenkins','React','Redux','git','SQL']
    return (
        <div className="skill-component">
            <h1>Skills</h1>
            <ul>
                {skills.map((lang)=>(
                    <li>{lang}</li>
                ))}
            </ul>
        </div>
    )
}