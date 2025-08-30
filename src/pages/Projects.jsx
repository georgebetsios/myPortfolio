import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'YelpCamp',
    description: 'Yelpcamp is a full-stack web application , where users can browse, create, edit, and review campgrounds. It features user authentication, image uploads, interactive maps, and a responsive UI, built with modern web technologies.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap 5', 'Passport.js', 'Cloudinary', 'Multer', 'MapTiler SDK', 'dotenv'],
    github: 'https://github.com/georgebetsios/Yelpcamp',
  },
  {
    id: 2,
    title: 'eShop Web Application',
    description: 'A full-stack eCommerce app with user registration, dynamic product loading from Excel, shopping cart, and PDF receipt via email (no payment integration).',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'PDFKit', 'Nodemailer'],
    github: 'https://github.com/georgebetsios/Thesis_Eshop',
  },
  {
    id: 3,
    title: 'Todo App',
    description: 'A modern and secure ToDo app featuring user authentication and personalized task management. Users can register, log in, create, update, and delete tasks in real-time.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'React', 'Axios', 'CSS Modules'],
    github: 'https://github.com/georgebetsios/todo-app',
  },
  {
    id: 4,
    title: 'Java Mini Projects',
    description: 'A collection of 3 small Java desktop applications including a Stopwatch, Calculator, and Weather App. Demonstrates Java GUI development with Swing/AWT and basic functionalities for each tool.',
    technologies: ['Java', 'Swing', 'AWT'],
    github: 'https://github.com/georgebetsios/java-projects',
  },
];

const ProjectCard = ({ project, refProp }) => {
  return (
    <div className="project-card" ref={refProp}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <h4 className='technologies'>Technologies:</h4>
      <p>{project.technologies.join(', ')}</p>

      <p>
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub className="github-icon" />
          GitHub
        </a>}
      </p>
    </div>
  );
};

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // μόνο πρώτη φορά
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section" id="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            refProp={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
