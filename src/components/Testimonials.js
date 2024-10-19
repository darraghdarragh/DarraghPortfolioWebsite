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
    {
      name: 'Emily Johnson',
      feedback: 'Your creativity and problem-solving skills are top-notch. Truly a pleasure to work with!',
      role: 'UX Designer',
    },
    {
      name: 'Michael Brown',
      feedback: 'Consistently delivers high-quality work on time. A great asset to any team.',
      role: 'CTO',
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4 className="author">- {testimonial.name}, {testimonial.role}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
