import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Jane Shyi",
    position: "Mentor at EvRet Academy",
    message: "Roshan is a dedicated and talented developer. His attention to detail and eagerness to learn make him stand out.",
  },
  {
    name: "John Rai",
    position: "Freelance Client",
    message: "Delivered my portfolio project on time with a clean UI. Highly recommend him for web development.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="message">“{t.message}”</p>
            <h4>{t.name}</h4>
            <span>{t.position}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
