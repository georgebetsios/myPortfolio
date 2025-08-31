import { useEffect, useRef } from 'react';
import '../styles/About.css';


const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" ref={aboutRef}>
      <h1>About Me</h1>
      <p>
        I'm a passionate Junior Full Stack Developer who loves building fast, scalable, and user-friendly
        web applications.
      </p>
      <p>
        I specialize in JavaScript and have hands-on experience with technologies like React, Node.js,
        Express, and MongoDB. I enjoy turning complex problems into simple, elegant solutions — whether it's
        designing a responsive UI or building RESTful APIs.
      </p>
      <p>I started coding from scratch during my thesis project, which fueled my passion for building
        functional and user-centered applications. Since then, I have been continuously improving my skills
        through personal projects and self-driven learning, eager to contribute to impactful software development.
      </p>
      <p>Upcoming MSc in <strong>Technologies of Interactive Systems </strong>Aristotle University of Thessaloniki, focusing on
        interactive design and HCI.
      </p>
      <p>I'm currently looking for new opportunities where I can grow as a developer and contribute to
        impactful projects.
      </p>
    </div>

  );
};

export default About;