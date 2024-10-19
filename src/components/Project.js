import React from 'react';
import './Project.css';

function Project() {
  return (
    <section id="project" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {/* Project Card 1 */}
        <div className="project-card">
          <img src="/images/portfolio-screenshot.png" alt="Portfolio Website Screenshot" className="project-image" />
          <h3>Portfolio Website</h3>
          <p>
            This portfolio site is my primary project, demonstrating my skills in web development. It includes responsive design, interactive elements, and a custom blog.
          </p>
          <ul>
            <li>Technologies: React, HTML, CSS, JavaScript</li>
            <li>Responsive design and SEO optimization</li>
          </ul>
          <div className="project-links">
            <a href="https://darraghdarragh.github.io/DarraghReact" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/darraghdarragh/DarraghReact" className="btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <img src="/images/portfolio-screenshot.png" alt="Another Project Screenshot" className="project-image" />
          <h3>API Integration Project</h3>
          <p>
            This project showcases my ability to integrate APIs and create dynamic web applications with React and Node.js.
          </p>
          <ul>
            <li>Technologies: React, Node.js, Express, MongoDB</li>
            <li>API integration and database management</li>
          </ul>
          <div className="project-links">
            <a href="https://example.com" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/darraghdarragh/APIIntegrationProject" className="btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <img src="/images/portfolio-screenshot.png" alt="Yet Another Project Screenshot" className="project-image" />
          <h3>JavaScript Game</h3>
          <p>
            A web-based game I developed using JavaScript and HTML5 Canvas, focusing on animations and user interactions.
          </p>
          <ul>
            <li>Technologies: JavaScript, HTML5, CSS3</li>
            <li>Game development and animations</li>
          </ul>
          <div className="project-links">
            <a href="https://example.com" className="btn" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
            <a href="https://github.com/darraghdarragh/JavaScriptGame" className="btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="project-card">
          <img src="/images/portfolio-screenshot.png" alt="E-commerce Project Screenshot" className="project-image" />
          <h3>E-commerce Platform</h3>
          <p>
            Developed a full-featured e-commerce platform with product listings, user authentication, and a secure payment system.
          </p>
          <ul>
            <li>Technologies: React, Redux, Node.js, Stripe API</li>
            <li>Full-stack development and payment integration</li>
          </ul>
          <div className="project-links">
            <a href="https://example.com" className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/darraghdarragh/EcommercePlatform" className="btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="project-card">
          <img src="/images/portfolio-screenshot.png" alt="Chat Application Screenshot" className="project-image" />
          <h3>Real-time Chat Application</h3>
          <p>
            A real-time chat application built using WebSockets for instant communication between users, featuring a clean and intuitive UI.
          </p>
          <ul>
            <li>Technologies: React, Socket.io, Node.js</li>
            <li>Real-time communication and WebSocket implementation</li>
          </ul>
          <div className="project-links">
            <a href="https://example.com" className="btn" target="_blank" rel="noopener noreferrer">
              Try Chat App
            </a>
            <a href="https://github.com/darraghdarragh/ChatApp" className="btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
