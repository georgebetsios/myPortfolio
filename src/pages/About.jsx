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
        I'm a Junior Full Stack Developer with a passion for building modern,
        responsive, and user-friendly web applications. I enjoy learning new
        technologies and continuously improving my skills through hands-on
        projects.
      </p>

      <p>
        My primary focus is JavaScript development, with practical experience in
        React, Node.js, Express, MongoDB, Firebase, and SQL databases. I enjoy
        developing both intuitive user interfaces and reliable backend services
        while writing clean, maintainable code.
      </p>

      <p>
        My journey into web development began during my university thesis, where I
        built a complete e-commerce application from scratch. Since then, I have
        continued expanding my knowledge through personal projects, exploring new
        technologies, and building applications that solve real-world problems.
      </p>

      <p>
        I'm also preparing to begin an <strong>MSc in Technologies of Interactive Systems</strong> at
        Aristotle University of Thessaloniki, with a focus on Interactive Design
        and Human–Computer Interaction (HCI).
      </p>

      <p>
        I'm currently seeking opportunities as a <strong>Junior Full Stack Developer</strong> where
        I can continue learning, grow professionally, collaborate with experienced
        teams, and contribute to meaningful software projects.
      </p>
    </div>

  );
};

export default About;