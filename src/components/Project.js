import React from 'react';
import aqi from '../assets/Output.png';

const Project = () => {
  return(
    <div className="project__container" id="project">
      <div className="project__header">
        <div className="marquee">
          <div>
            <span>&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill</span>
          </div>
        </div>
      </div>
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li>REACT E-COMMERCE</li>
              <li>Consultas API  Open Data</li>
              <li>Componentes de composición React Hooks </li>
              <li>ReacsTrap</li>
              <li>Diseño de pantalla adaptable（RWD）</li>
            </ul>
            <div className="project__btns">
              <a href="https://simple-ecommerce-react-g8fvxclqe-simplereactecommerse.vercel.app/" target="_blank" rel="noreferrer"><div>Link</div></a >
              <a href="https://github.com/jonathanvolker/simpleEcommerceReact" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://github.com/jonathanvolker/simpleEcommerceReact/blob/main/assets/Output.png" target="_blank" rel="noreferrer">
              <img alt="project-air" src={aqi}/>
            </a >
          
          </div>
        </div>
       </div>
        <br/> 
        <br/>
        <br/>
        <br/>         
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">REACT CV</li>
              <li>Componentes de composición React Hooks </li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Diseño de pantalla adaptable（RWD）</li>
            </ul>
            <div className="project__btns">
              <a href="" target="_blank" rel="noreferrer"><div>Link</div></a >
              <a href="" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" />
            </a >
          
          </div>
        </div>
       </div>
    </div>
  )
}

export default Project;