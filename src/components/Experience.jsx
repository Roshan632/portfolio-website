import React from 'react';
import '../styles/Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'TechNepal Inc.',
    date: 'Jan 2024 - May 2024',
    description: 'Built responsive React components and improved Lighthouse performance scores by 25%.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Freelancer.com',
    date: 'Jun 2023 - Dec 2023',
    description: 'Developed eCommerce sites using the MERN stack and integrated payment gateways (eSewa, Khalti).',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Pixels',
    date: 'Mar 2023 - May 2023',
    description: 'Designed mobile-friendly interfaces using Figma, improved conversion by 18%.',
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company} • {exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
