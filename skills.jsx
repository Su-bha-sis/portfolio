import React from "react";
import "./skills.css";
import skillscard from "../../assets/skills.js";

const Skills = () => {
  return (
    <div id="skills" className="skills container-box">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
        <div className="skills-title">
          <h1>skills</h1>
        </div>
        <div className="skills-slider d-flex  justify-content-center align-items-center gap-5">
          {skillscard.map((item, idx) => {
            return (
              <div key={idx} className="cards-flex">
                <div className="slider-tile justify-content-between d-flex">
                  <h1 className="card-title">{item.name}</h1>
                  <p>{item.per}</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: item.per }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;