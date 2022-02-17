import React from 'react';
import portrait from '../assets/principal.png';

const Intro = () => {
  return(
    <div className="intro__container">
      <div className="intro__text">
        <h1>
          Soy Jonathan Volker<br/>Baja para conocerme.
          <div className="intro__line"></div>
        </h1>
      </div>
      <img alt="portrait" src={portrait}/>
    </div>
  )
}

export default Intro;