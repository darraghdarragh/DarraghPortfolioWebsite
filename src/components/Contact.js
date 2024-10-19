import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    if (!name.value || !email.value || !message.value) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    setFormStatus('Thanks for reaching out! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </section>
  );
}

export default Contact;
