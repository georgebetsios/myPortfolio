import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="home-wrapper">
      <div className={`container ${fadeIn ? 'fade-in' : ''}`}>
        <h1 className="title">Hi, I'm George!</h1>
        <p className="intro">
          I'm a Junior Full Stack Developer focused on building intuitive,
          efficient, and scalable web applications from concept to deployment.
        </p>

        <p className="intro">
          Passionate about learning new technologies and improving my skills.
          Looking forward to collaborating on exciting projects!
        </p>

        <p className="links">
          <a href="#contact" className="contact-button">Get in touch</a>
        </p>
      </div>
    </div>
  );
};

export default Home;



