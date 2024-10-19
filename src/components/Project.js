import React, { useState } from 'react';
import './Project.css';

function Project() {
  // Array of projects to map through for scalability.
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'This portfolio site is my primary project, demonstrating my skills in web development. It includes responsive design, interactive elements, and a custom blog.',
      technologies: 'React, HTML, CSS, JavaScript',
      imgSrc: '/images/project-screenshot.png',
      demoLink: 'https://example.com', // Replace with your live demo link
      repoLink: 'https://github.com/darraghdarragh/DarraghWebsite',
      details: 'This project focuses on a user-friendly interface, incorporating design principles and modern web development techniques.',
    },
    // Add more projects as needed
  ];

  // State for toggling more details.
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="project">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt={`${project.title} Screenshot`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              <li><strong>Technologies:</strong> {project.technologies}</li>
            </ul>
            <div className="project-links">
              <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.repoLink} className="btn" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
            <button className="btn-toggle" onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? 'Hide Details' : 'Show More'}
            </button>
            {showDetails && <p className="project-details">{project.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
