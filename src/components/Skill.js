import React from 'react';

const Skill = () => {
  return(
    <div className="skill__container">
      <div className="skill__header">
        <div className="marquee">
          <div>
            <span>&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill</span>
          </div>
        </div>
      </div>
      <div className="skill__collections">
        <div className="skill__collection">
          <h5 className="skill__text-1">Front-End</h5>
          <ul className="skill__text-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>Flexbox &#38; Grid</li>
            <li>JavaScript ES6+</li>
            <li>React</li>
            <li>Redux</li>
            <li>NodeJS + PostgreSQL</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="skill__collection">
          <h5 className="skill__text-1">Idioma</h5>
          <ul className="skill__text-1">
            <li>Ingles (lectura)</li>
        
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill;