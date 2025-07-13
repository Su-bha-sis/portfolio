//Import Sections
import React from "react";
import {useState,useRef} from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className="container-box">
      <div className="container d-flex align-items-center justify-content-between Navbar">
        <div className="logos">
          <span></span>
        </div>
        <div className="NavLinks ">
          <ul className="Navmenu d-flex align-items-center">
            <li><AnchorLink className={menu==="home"?"active-links":"hover-links"} href="#home" onClick={()=>setMenu("home")}>Home</AnchorLink></li>
            <li><AnchorLink className={menu==="about"?"active-links":"hover-links"} href="#about" onClick={()=>setMenu("about")}>About</AnchorLink></li>
            <li><AnchorLink className={menu==="skills"?"active-links":"hover-links"} href="#skills" onClick={()=>setMenu("skills")}>skills</AnchorLink></li>
            <li><AnchorLink className={menu==="project"?"active-links":"hover-links"} href="#project" onClick={()=>setMenu("project")}>project</AnchorLink></li>
            <li><AnchorLink className={menu==="contact"?"active-links":"hover-links"} href="#contact" onClick={()=>setMenu("contact")}>contact</AnchorLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;