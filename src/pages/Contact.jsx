import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-section">
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-description">
          Our team would love to hear from you.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First name" className="form-input" required />
            <input type="text" placeholder="Last name" className="form-input" required />
          </div>
          <input type="email" placeholder="Email" className="form-input" required />
          <input type="tel" placeholder="Phone number" className="form-input" required />
          <div className="form-options">
            <label>
              <input type="radio" name="role" value="solo" required />
              <span>I'm a solo creator</span>
            </label>
            <label>
              <input type="radio" name="role" value="team" required />
              <span>I'm part of a team</span>
            </label>
          </div>
          <label className="privacy-policy">
            <input type="checkbox" required />
            I agree to the friendly <a href="#privacy">privacy policy</a>.
          </label>
          <button type="submit" className="contact-button">Get in touch</button>
        </form>
      </div>
      <div className="contact-image-section">
        <img 
          src="https://via.placeholder.com/400x600" 
          alt="Contact" 
          className="contact-image" 
        />
        <p className="testimonial">
          "This is the perfect tool for startups to keep track of their finances. Their intuitive dashboard and reporting capabilities have saved our team hours of manual work."
          <br />
          <strong>— Aliah Lane</strong>, Founder
        </p>
      </div>
    </div>
  );
};

export default Contact;
