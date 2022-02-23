import React from 'react';

const linkedIn= "http://www.linkedin.com/in/jonathan-volker";


const Contact = () => {
  return(
    <div className="contact__container" id="contact">
      <div className="contact__arrow">
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="contact__content">
        <h5>Contactame</h5>
        <p>Nombre｜Jonathan Volker</p>
        <p>Puesto｜Front/back-end</p>
        <p>Telefono｜+543413571646</p>
        <p>E-mail｜joni_451@hotmail.com</p>
        <div className="contact__btn">
          <a href={linkedIn}>
            <div>LinkedIn</div>
          </a>
        </div>
        
        <div className="contact__btn">
          <a href="/">
            <div>Inicio</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;