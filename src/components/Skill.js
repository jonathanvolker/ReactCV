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
            <li>GitHub</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="skill__collection">
          <h5 className="skill__text-1">Back-End</h5>
          <ul className="skill__text-1">
            <li>NodeJS</li>
            <li>NextJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>
        
      
      </div>
    </div>
  )
}

export default Skill;