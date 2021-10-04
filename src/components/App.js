import React, { useEffect } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Navbar from './Navbar';
import Project from './Project';
import AboutSkill from './AboutSkill';
import Experience from './Experience';

const App = () => {
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  const listenScrollEvent = () => {
  
    const colors = ['', '', '', '', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black'];
    const sections = [...document.getElementsByTagName('section')];
    const scrollFromTop = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      if (scrollFromTop * 1 <= sections[i].offsetTop) {
          document.body.className = colors[i];
          break;
      };
    };
  }


  return(
    <div id="home">
      <section><Navbar/></section>
     
      <div className="app__container">
        <section><Intro/></section>
        <section><AboutSkill/></section>
        <section><Project/></section>
        <section><Experience/></section>
      </div>
      <section><Contact/></section>
      <section><Footer/></section>
      <a className="app__btn" href="https://github.com/jonathanvolker" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
        <div>Github</div>
      </a>
      <div className="cursors">
        <div className="cursors__dot cursors__dot--1"></div>
        <div className="cursors__dot cursors__dot--2"></div>
        <div className="cursors__dot cursors__dot--3"></div>
        <div className="cursors__dot cursors__dot--4"></div>
        <div className="cursors__dot cursors__dot--5"></div>
        <div className="cursors__dot cursors__dot--6"></div>
        <div className="cursors__dot cursors__dot--7"></div>
        <div className="cursors__dot cursors__dot--8"></div>
        <div className="cursors__dot cursors__dot--9"></div>
        <div className="cursors__dot cursors__dot--10"></div>
        <div className="cursors__dot cursors__dot--11"></div>
        <div className="cursors__dot cursors__dot--12"></div>
        <div className="cursors__dot cursors__dot--13"></div>
        <div className="cursors__dot cursors__dot--14"></div>
        <div className="cursors__dot cursors__dot--15"></div>
        <div className="cursors__dot cursors__dot--16"></div>
        <div className="cursors__dot cursors__dot--17"></div>
      </div>
    </div>
  )
}

export default App;