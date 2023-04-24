import React from 'react';

function NavBar() {
  return (
    <nav>
      <a href="#home" key="home-link">home</a>
      <a href="#about" key="about-link">about</a>
      <a href="#projects" key="projects-link">projects</a>
    </nav>
  );
}

export default NavBar;
