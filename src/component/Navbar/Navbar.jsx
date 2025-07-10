import React from "react";
import {useState,useRef} from "react";
import "./Navbar.css";
import AnchorLinks from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className="container-box">
      <div className="container d-flex align-items-center justify-content-between navbar">
        <div className="logos">
          <span></span>
        </div>
        <div className="navLinks ">
          <ul className="navmenu d-flex align-items-center">
            <li ><AnchorLinks className={menu==="home"?"active-links":"hover-links"} href="#Home" onClick={()=>setMenu("home")}>Home</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="about"?"active-links":"hover-links"} href="#about" onClick={()=>setMenu("about")}>About</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="skills"?"active-links":"hover-links"} href="#skills" onClick={()=>setMenu("skills")}>skills</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="project"?"active-links":"hover-links"} href="#project" onClick={()=>setMenu("project")}>project</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="contact"?"active-links":"hover-links"} href="#contact" onClick={()=>setMenu("contact")}>contact</AnchorLinks></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;