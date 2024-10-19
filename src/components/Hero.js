import React from 'react';
import Typical from 'react-typical';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hi, I'm Darragh.</h1>
      <Typical
        steps={['Software Engineer.', 2000, 'Web Developer.', 2000, 'Tech Enthusiast.', 2000]}
        loop={Infinity}
        wrapper="h2"
      />
      <p>Welcome to my portfolio. I build scalable and user-friendly web applications.</p>
      <a href="#projects" className="btn">See My Work</a>
    </section>
  );
}

export default Hero;
