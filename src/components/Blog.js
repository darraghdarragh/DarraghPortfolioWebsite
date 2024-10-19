import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="blog" className="blog">
      <h2 className="blog-heading">Blog</h2>
      <div className="blog-post">
        <h3>My Development Journey</h3>
        <p>
          A deep dive into the process of building this portfolio, including design decisions, challenges, and technical solutions.
        </p>
        <a href="#" className="btn" onClick={handleReadMore}>Read More</a>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>My Development Journey</h3>
            <p>
              This is where you can put more detailed information about your development journey, including challenges you faced, solutions you found, and your learning experience.
            </p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;
