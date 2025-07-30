import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main style={{ margin: '0 auto' }}>
        <section id="home">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
    // <div className="app-container">
    //   <Router>
    //     <Navbar />
    //     <main style={{ margin: '0 auto' }}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/skills" element={<Skills />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </main>
    //   </Router>
    // </div>
  );
}

export default App;

