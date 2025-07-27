import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Roshan Yadav</h3>
        <p>Passionate Web Developer & Designer — turning ideas into digital experiences.</p>
        <div className="socials">
          <a href="https://github.com/Roshan632" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/roshan-yadav-3a1b98285/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Roshan Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
