import React from 'react';
import aqi from '../assets/Output.png';
import CV1 from '../assets/CV1.gif';
import countries from '../assets/react-countries.png';
import demoVideogames from "../assets/demoVideogames.gif";
import scientiaPf from '../assets/scientia.gif'
import petsData from "../assets/petsData.png"
import uipath from '../assets/uipath.jpg'
import jjrpa from "../assets/jjrpa.gif"


const Project = () => {
  return (
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
              <li className="projects_title">Web app React jjrpa Solutions</li>
              <br />
              <li>Componentes de React</li>
              <li>React Hooks</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Deploy AWS Amplify- Route53(redireccionamiento)</li>
            </ul>
            <div className="project__btns">
              <a href="https://main.d37ywz3jm45zfp.amplifyapp.com" target="_blank" rel="noreferrer"><div>Link</div></a >
              <a href="https://github.com/jonathanvolker/RPA-AtomationsWebPageReact" target="_blank" rel="noreferrer"><div>ViewCode</div></a >

            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={jjrpa} />

            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">Automatizacion de facturas recurrentes</li>
              <br />
              <li>Uipath Studio Community</li>
              <li>Excel</li>
              <li>GestionerSoft (software administrativo)</li>

            </ul>
            <div className="project__btns">
              <a href="https://github.com/jonathanvolker/RPA-AutomatizacionFacturas-excel-GestionerSoft.git" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={uipath} />

            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">ScientiaPF Ecommerce</li>
              <br />
              <li>Componentes de React</li>
              <li>React Hooks + Redux</li>
              <li>Material UI</li>
              <li>Base de datos PostgreSQL</li>
              <li>NodeJS + Express</li>
              <li>Responsive Design</li>

            </ul>
            <div className="project__btns">
              <a href="https://front-scientia-pf-m5thwh74d-scientia.vercel.app" target="_blank" rel="noreferrer"><div>Link</div></a >
              <a href="https://github.com/jonathanvolker/" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={scientiaPf} />

            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">VideogamesApp</li>
              <br />
              <li>Componentes de React</li>
              <li>React Hooks + Redux</li>
              <li>Stiled Componentes de React</li>
              <li>Base de datos Postgres</li>
              <li>NodeJS Sequelize</li>
              <li>Consultas a API opendata</li>

            </ul>
            <div className="project__btns">
              <a href="https://github.com/jonathanvolker/PI-Videogames-main" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={demoVideogames} />
            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">Search Countries</li>
              <br />
              <li>Componentes de React</li>
              <li>React Hooks + Redux</li>
              <li>Stiled Componentes de React</li>
              <li>Base de datos Postgres</li>
              <li>Consultas a API opendata</li>
              <li>NodeJS Sequelize</li>

            </ul>
            <div className="project__btns">
              <a href="https://github.com/jonathanvolker/Countries-React" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={countries} />
            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="projects_title">PetsData</li>
              <br />
              <li>Componentes de React</li>
              <li>React Hooks </li>
              <li>Material UI</li>
              <li>NodeJS Strapi</li>
              <li>Base de datos Postgres</li>
              <li>Responsive Design</li>

            </ul>
            <div className="project__btns">
              <a href="https://github.com/jonathanvolker/api-strapi-postgreSQL-turneroDeVeterinaria" target="_blank" rel="noreferrer"><div>ViewCode(backend)</div></a >
              <a href="https://github.com/jonathanvolker/cliente-TurneroDeVeterinaria" target="_blank" rel="noreferrer"><div>ViewCode(frontend)</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={petsData} />
            </a >
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li>React simple E-COMMERCE</li>
              <br />
              <li>Consultas API  Open Data</li>
              <li>React Hooks </li>
              <li>ReacsTrap</li>
            </ul>
            <div className="project__btns">
              <a href="https://github.com/jonathanvolker/simpleEcommerceReact" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://github.com/jonathanvolker/simpleEcommerceReact/blob/main/assets/Output.png" target="_blank" rel="noreferrer">
              <img alt="project-air" src={aqi} />
            </a >

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <ul>
              <li className="skill__text-1">React CV</li>
              <br />
              <li>Componentes React + Hooks </li>
              <li>CSS</li>
              <li>AWS Amplifi</li>
              <li>Responsive Design</li>
            </ul>
            <div className="project__btns">
              <a href="https://master.dzfgo82do43g5.amplifyapp.com" target="_blank" rel="noreferrer"><div>Link</div></a >
              <a href="https://github.com/jonathanvolker/reactcv" target="_blank" rel="noreferrer"><div>ViewCode</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="" target="_blank" rel="noreferrer">
              <img alt="project-air" src={CV1} />
            </a >

          </div>
        </div>
      </div>
    

    </div>

  )
}

export default Project;