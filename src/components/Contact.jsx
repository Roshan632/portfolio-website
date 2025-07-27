// import React from 'react';
// import '../styles/Projects.css';

// const Contact = () => (
//   <div className="contact-section">
//     <h2>Contact Me</h2>
//     <div className="contact-details">
//       <p>Email: <a href="mailto:rosh45644.email@gmail.com">rosh45644@gmail.com</a></p>
//       <p>LinkedIn: <a href="https://linkedin.com/in/roshan-yadav-3a1b98285/" target="_blank" rel="noopener noreferrer">linkedin.com/in/roshan-yadav</a></p>
//       <p>GitHub: <a href="https://github.com/Roshan632" target="_blank" rel="noopener noreferrer">github.com/Roshan632</a></p>
//     </div>
//   </div>
// );

// export default Contact;
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2 className="contact-heading">📬 Contact Me</h2>
    <p className="contact-subtitle">I’d love to hear from you. Reach out or find me on social platforms below.</p>

    <div className="contact-wrapper">
      {/* Left: Contact Info */}
      <div className="contact-info">
        <a href="mailto:rosh45644.email@gmail.com" className="contact-link" title="Email">
          <FaEnvelope className="contact-icon" />
          rosh45644@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/roshan-yadav-3a1b98285/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="LinkedIn"
        >
          <FaLinkedin className="contact-icon" />
          linkedin.com/in/roshan-yadav
        </a>
        <a
          href="https://github.com/Roshan632"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="GitHub"
        >
          <FaGithub className="contact-icon" />
          github.com/Roshan632
        </a>
      </div>

      {/* Right: Map */}
      <div className="contact-map">
        <iframe
          title="Roshan Location"
         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d223.08804920424433!2d88.09439145037649!3d26.539132435521374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2snp!4v1753602997606!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
