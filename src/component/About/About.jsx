import React from "react";
import "./About.css";
import Card from "../../assets/aboutcard.js";


const About = () => {
  return (
    <div id="about" className="container-box">
      <div className="container about d-flex flex-column justify-content-center align-items-center gap-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-5">
          <div className="About-top d-flex flex-column justify-content-center align-items-center gap-2">
            <h1>About Me</h1>
            <p>
              I'm a passionate full-stack developer with 3+ years of experience
              creating web applications that solve real-world problems. I love
              working with modern technologies and am always eager to learn new
              things.
            </p>
          </div>
          <div className="About-bottom d-flex  ">
            {Card.map((item, idx) => {
              return (
                // <div key={idx} className="card">
                  <div key={idx}  className="card-body d-flex flex-column">
                    <h1 className="card-title">{item.c_title}</h1>
                    <p className="card-text">{item.c_desc}</p>
                    {/* <button className="read-button justify-content-center d-flex align-items-center">
                      Read More <FaArrowRight className="arrow-icon" />
                    </button> */}
                  </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;