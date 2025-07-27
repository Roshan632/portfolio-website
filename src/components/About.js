import React from 'react';
import myPhoto from '../assets/profile.jpg';
const About = () => (
  <div className="about-section">
      <img 
      src={myPhoto} 
      alt="My Profile" 
      className="my-photo"
    />
    <h2>About Me</h2>
    
    <p>
      Hi! I'm Roshan Yadav, a passionate developer with experience in building web applications using React, JavaScript, and modern web technologies. I love creating beautiful, responsive, and user-friendly websites.
    </p>
  </div>
);

export default About;