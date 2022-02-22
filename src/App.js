import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import { themeOne, themeTwo } from './styles/themes';
import { projects } from './data/projects'
import { aboutMe, socials } from './data/aboutMe';

import { Scroller, CoffeeCup } from './components/index';
import { FullScreen, About, Projects, Footer, ReactIcon, Toggle } from './styles/styles.js';

export default function App() {

  const [theme, setTheme] = useState(themeOne);

  const toggleTheme = () => {
    setTheme(themeTwo);
    theme === themeTwo && setTheme(themeOne);
  };

  const displayedProjects = projects.map((project) => {
    return <div key={project.id} id={project.id} className="project">
      <img src={project.imgSrc[0]} alt={project.id} className="fade" />
    <div id="description">
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <a href={project.path} className="try" target="_blank" rel="noreferrer">Try it out</a>
    </div>
  </div>
  });

  const icons = socials.map((social) => {
    return <a key={social.path} href={social.path} target="_blank" rel="noreferrer"><i className={social.icon} /></a>
  });

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <FullScreen theme={theme}>
          <div id="nav">
            <h1>Joshua Cooper</h1>
            <Toggle theme={theme} onChange={toggleTheme}>
              <input type="checkbox"></input>
              <span className="slider"></span>
            </Toggle>
          </div>

          <About theme={theme}>
            <div id="wrap">
              {/* <img src={me} alt="Joshua" /> */}
              <CoffeeCup />
              <div id="desc">
                <h2>From coffee to coding</h2>
                <p>{aboutMe}</p>
                <div id="icon-wrapper">
                  {icons}
                </div>
              </div>
            </div>
          </About>

          <Scroller />

          <Projects theme={theme}>
            {/* <h1>Portfolio</h1> */}
            {displayedProjects}
          </Projects>

          <ReactIcon className='fab fa-react' />

          <Footer theme={theme}>
            <p>Portfolio designed by Joshua Cooper © 2022</p>
          </Footer>

      </FullScreen>
    </ThemeContext.Provider>
  );
};
