import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <article className="blog-post">
        <h3>My Development Journey</h3>
        <p>
          A deep dive into the process of building this portfolio, including design decisions, challenges, and technical solutions.
        </p>
        <a href="#" className="btn" onClick={handleReadMoreClick}>Read More</a>
      </article>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>My Development Journey</h3>
            <p>
              Here is the full article where I describe the entire process of building this portfolio. I go into details about
              the challenges I faced, the tools I used, and the design decisions I made. It’s been a fantastic learning experience,
              and I'm excited to share my journey!
            </p>
            <button className="btn close-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;
