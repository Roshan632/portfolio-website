import React, { useState } from 'react';
import myPhoto from '../assets/profile.jpg';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const initialProjects = [
    {
        title: 'Rock Paper Scissors Game',
        description: 'A fun JavaScript game where you play Rock, Paper, Scissors against the computer.',
        image: project1Img
    },
    {
        title: 'Vehicle Management System',
        description: 'A system for managing vehicle repair services, tracking jobs and customer info.',
        image: project2Img
    },
    {
        title: 'Simple Project',
        description: 'A simple project designed for fun and learning new skills.',
        image: project3Img
    },
];

const Projects = () => {
    const [likes, setLikes] = useState(Array(initialProjects.length).fill(0));

    const handleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    return (
        <div className="projects-section">
            {/* <img 
                src={myPhoto} 
                alt="My Profile" 
                className="my-photo"
            /> */}
            <h2>My Projects</h2>
            <div className="projects-grid">
                {initialProjects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-img"
                        />
                        <div className="project-title">{project.title}</div>
                        <div className="project-description">{project.description}</div>
                        <button 
                            className="like-btn" 
                            onClick={() => handleLike(index)}
                            aria-label="Like this project"
                        >
                            ❤️ {likes[index]}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;