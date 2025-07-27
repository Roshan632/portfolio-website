import React from 'react';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GoogleForm from './components/GoogleForm';
import Banner from './components/Banner';
import './styles/App.css';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { motion } from 'framer-motion';
import Services from './components/Services';
import HireMe from './components/HireMe';
import Testimonials from './components/Testimonials';

import ScrollToTop from './components/ScrollToTop';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
             <ScrollProgress />
            
            <Navbar />
            
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl font-bold text-center my-8"
        style={{ color: '#333' }}>
             Welcome To  My Portfolio
    </motion.h1>
             <motion.div id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Hero />
            </motion.div>

             <motion.div id="skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Skills />
            </motion.div>
             <motion.div id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Projects />

                </motion.div>

                 <motion.div id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Experience />
                
                </motion.div>

                  <motion.div id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Services />
                
            </motion.div>
             <motion.div id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <HireMe />
                </motion.div>

                 <motion.div id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Testimonials />
                
                
            </motion.div>
             <motion.div id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Contact />
            </motion.div>
            <motion.div id="form" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <GoogleForm />

            </motion.div>

            <motion.div id="form" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <ScrollToTop />

            </motion.div>
           
           <motion.div id="form" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                <Footer />

            </motion.div>
           
            
        </div>
    );
}

export default App;