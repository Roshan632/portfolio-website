import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HireMe.css';

const HireMe = () => {
  return (
    <section className="hireme-section">
      <motion.div
        className="hireme-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Let's Work Together</h2>
        <p>
          I’m available for freelance work, internships, or full-time positions. Let’s build something great!
        </p>
        <div className="hireme-buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="/Roshan-Yadav-Resume.pdf" download className="btn secondary">Download Resume</a>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;
