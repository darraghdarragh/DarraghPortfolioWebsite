import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'Working with you has been a wonderful experience. Your attention to detail is exceptional!',
      role: 'Product Manager',
    },
    {
      name: 'John Smith',
      feedback: 'A fantastic developer with a great understanding of both frontend and backend technologies.',
      role: 'Tech Lead',
    },
  ];

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}, {testimonial.role}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
