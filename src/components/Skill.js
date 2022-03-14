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
            <li>React - Redux - Context </li>
            <li>Git</li>
            <li>AWS/Heroku/Vercel</li>
         </ul>
        </div>
        
        <div className="skill__collection">
          <h5 className="skill__text-1">Back-End</h5>
          <ul className="skill__text-1">
            <li>NodeJS</li>
            <li>Express</li>
            <li>Strapi</li>
            <li>NextJS</li>
            <li>AWS/Heroku/Vercel</li>
          </ul>
        </div>
        <div className="skill__collections">
        <div className="skill__collection">
          <h5 className="skill__text-1">Bases de Datos</h5>
          <ul className="skill__text-1">
          <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
         </ul>
        </div>
        </div>       
        
        <div className="skill__collection">
          <h5 className="skill__text-1">RPA</h5>
          <ul className="skill__text-1">
            <li>Uipath Studio Community</li>
          </ul>
        </div>
        
      
      </div>
    </div>
  )
}

export default Skill;