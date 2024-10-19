import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

    const templateParams = {
      to_name: 'Darragh', // Replace with your name if you want a static recipient name
      from_name: name.value, // This will replace {{from_name}} in your template
      from_email: email.value, // Add this if you want to show the sender's email in the template
      message: message.value, // This will replace {{message}} in your template
    };

    emailjs.send('service_0optf9i', 'template_gfz5xdg', templateParams, 'JqvOC3BfiXz0LygOD')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormStatus('Thanks for reaching out! I will get back to you soon.');
        },
        (error) => {
          console.error('FAILED...', error);
          setFormStatus('An error occurred, please try again later.');
        }
      );

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
