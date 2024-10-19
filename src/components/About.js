import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Reference the image using the public folder path */}
        <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
        <div className="about-text">
          <p>
            I'm a software engineer with a passion for creating intuitive and user-friendly web applications.
            This portfolio website showcases my skills, design, and technical expertise.
          </p>
          <div className="skills">
            <h3>Focus Areas:</h3>
            <ul>
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>UI/UX Design</li>
              <li>React & JavaScript</li>
            </ul>
          </div>
          <a href="/resume.pdf" className="btn" download>
            <span className="download-icon">📄</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
