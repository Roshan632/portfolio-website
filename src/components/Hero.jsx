// import React from 'react';
// import myPhoto from '../assets/profile.png';
// import '../styles/Hero.css'; // Adjust path if needed

// const Hero = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h1>Hi, I'm Roshan 👋</h1>
//           <p>A passionate web developer building modern web experiences.</p>
//         </div>
//         <div className="hero-image">
//           <img
//             src={myPhoto}
//             className="rounded-full w-48 h-48 object-cover shadow-lg"
//             alt="Roshan Yadav Profile"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../assets/profile.png';
import '../styles/Hero.css';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Text Animation */}
        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Roshan Yadav</span> 👋
          </h1>

          <h2 className="typewriter">
            <Typewriter
              words={['Web Developer', 'ReactJS Enthusiast', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p>
            I build clean, responsive, and user-friendly websites using the latest web technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn">Hire Me</a>
            <a
              href="/Roshan-Yadav-Resume.pdf"
              className="hero-btn-outline"
              download="Roshan-Yadav-Resume.pdf"
              rel="noopener noreferrer"
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src={myPhoto}
            className="profile-pic"
            alt="Roshan Yadav"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
