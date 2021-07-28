import React, { useState } from 'react';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const setMenuFalse = () => {
    if(window.innerWidth >= 550) {
      setMenu(false)
    } else {
      return;
    }
  };

  window.addEventListener('resize', setMenuFalse);

  return(
      <nav className="navbar__container">
        <a className="navbar__copy" href="#home" onClick={() => setMenu(false)}>YW - 21 &copy;</a>
        <div className={menu? "navbar__links active" : "navbar__links"}>
          <a href="#about" onClick={() => setMenu(false)}>Sobre mi..</a>
          <a href="#project" onClick={() => setMenu(false)}>Projectos</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experiencia</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contacto</a>
        </div>
        <div className="navbar__menu" onClick={() => setMenu(!menu)}>
          <i className={menu? "fas fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
  )
}

export default Navbar;