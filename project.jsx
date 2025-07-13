import React from 'react'
import './project.css'
import Projects  from '../../assets/project.js'

const Project = () => {
  return (
    <div id="project" className="container-box projet">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="title-project">
          <h1>Featured Project</h1>
        </div>
        <div className="project-cards">
          {Projects.map((item,idx)=>{
             return( 
             <div key={idx} className="project-card">
                <img  src={item.img} alt="" />
                <div className="project-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="used d-flex">
                    {item.used.map((ele,idxe)=>{
                      return(
                        <div key={idxe}>
                          {ele}
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons">
                    <a href={item.demo}>Demo</a>
                    <a href={item.sourceCode}>Source Code</a>
                  </div>
                </div>
             </div>
             );
          })}
        </div>
      </div>
    </div>
  )

}

export default Project