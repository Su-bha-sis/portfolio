import React from "react";
import "./Hero.css";
import photo from "../../assets/photo.jpg";

const Hero = () => {
  return (
    <div id="home" className="container-box">
      <div  className="container d-flex py-3 justify-content-between align-items-center Hero-section">
        <div className="hero-right">
            <h1>Hi,I'm <span className="Name">Subhasis Sahoo</span></h1>
            <p>Full Stack Developer passionate about creating innovative web solutions</p>
            <div className="button d-flex ">
                <button className=" primary-btn ">View My Work</button>
                <button className="  Secondary-btn">View My Work</button>
            </div>
        </div>
        <div className="hero-left">
            <img src={photo} onError={(e) => (e.target.style.display = 'none')} alt="photo"  className="rounded-circle mb-3" width="500px"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;