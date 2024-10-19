import React from 'react';

function Blog() {
  const handleClick = (event) => {
    event.preventDefault();
    alert('Read more functionality is coming soon!');
  };

  return (
    <section id="blog">
      <h2>Blog</h2>
      <article>
        <h3>My Development Journey</h3>
        <p>A deep dive into the process of building this portfolio, including design decisions, challenges, and technical solutions.</p>
        <a href="#" className="btn" onClick={handleClick}>Read More</a>
      </article>
    </section>
  );
}

export default Blog;
