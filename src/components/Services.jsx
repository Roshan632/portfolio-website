import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaTools } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating clean, intuitive, and modern user interfaces and experiences.',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Web Development',
    description: 'Building full-stack applications with React, Node.js, MongoDB, and Express.',
    icon: <FaCode />,
  },
  {
    title: 'Maintenance & SEO',
    description: 'Optimizing website performance, fixing bugs, and improving Google visibility.',
    icon: <FaTools />,
  },
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="services-title"
      >
        My Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
