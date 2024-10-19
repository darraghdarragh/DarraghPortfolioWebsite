import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaReact size={50} />
          <h3>React</h3>
          <p>Building interactive and dynamic web applications.</p>
        </div>
        <div className="skill-card">
          <FaNodeJs size={50} />
          <h3>Node.js</h3>
          <p>Creating scalable server-side applications and APIs.</p>
        </div>
        <div className="skill-card">
          <FaPython size={50} />
          <h3>Python</h3>
          <p>Data analysis, automation, and API development.</p>
        </div>
        <div className="skill-card">
          <FaJava size={50} />
          <h3>Java</h3>
          <p>Object-oriented programming and software development.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
