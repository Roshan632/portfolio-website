import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GoogleForm from './components/GoogleForm';
import Banner from './components/Banner';
import './styles/App.css';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

function App() {
    return (
        <div className="App">
             <ScrollProgress />
            <Banner />
            <Navbar />
            <h1 className="fade-in" style={{ animationDelay: '0.1s' }}>My Portfolio</h1>
            <div id="about" className="fade-in" style={{ animationDelay: '0.3s' }}><About /></div>
            <div id="skills" className="fade-in" style={{ animationDelay: '0.5s' }}><Skills /></div>
            <div id="projects" className="fade-in" style={{ animationDelay: '0.7s' }}><Projects /></div>
            <div id="contact" className="fade-in" style={{ animationDelay: '0.9s' }}><Contact /></div>
            <div id="form" className="fade-in" style={{ animationDelay: '1.1s' }}><GoogleForm /></div>
        </div>
    );
}

export default App;