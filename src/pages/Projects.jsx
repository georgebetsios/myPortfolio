import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Personal Trainer Management System',
    description: 'A responsive web application designed for personal trainers to manage clients, build customized workout programs, track progress, and log exercise scores with secure authentication.',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'React Router v6', 'Custom CSS', 'FontAwesome'],
    github: 'https://github.com/georgebetsios/personal-trainer-management',
  },
  {
    id: 2,
    title: 'TripMaster',
    description: 'A native Android application that serves as an all-in-one travel companion. Features real-time itinerary planning, interactive packing checklists, sight markers, and dual-category budget tracking synced with the cloud.',
    technologies: ['Android SDK', 'Java', 'Firebase Firestore', 'Firebase Auth', 'XML', 'Material Design'],
    github: 'https://github.com/georgebetsios/TripMaster',
  },
  {
    id: 3,
    title: 'myChatbots',
    description: 'A comparative conversational AI project featuring two chatbot implementations: a modern NLU-driven machine learning bot built with Rasa, and a rule-based conversational agent built with AIML.',
    technologies: ['Python', 'Rasa NLU', 'AIML', 'NLP', 'YAML', 'XML'],
    github: 'https://github.com/georgebetsios/myChatbots', 
  },
  {
    id: 4,
    title: 'Trainer Website',
    description: 'A modern and responsive personal trainer platform showcasing training programs, client testimonials, and online coaching request forms with EmailJS integration.',
    technologies: ['React', 'Vite', 'Bootstrap 5', 'React Router', 'EmailJS', 'CSS3'],
    github: 'https://github.com/georgebetsios/personal-trainer-portfolio',
  },
  {
    id: 5,
    title: 'YelpCamp',
    description: 'Yelpcamp is a full-stack web application, where users can browse, create, edit, and review campgrounds. It features user authentication, image uploads, interactive maps, and a responsive UI.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap 5', 'Passport.js', 'Cloudinary', 'MapTiler SDK'],
    github: 'https://github.com/georgebetsios/Yelpcamp',
  },
  {
    id: 6,
    title: 'eShop Web Application',
    description: 'A full-stack eCommerce app with user registration, dynamic product loading from Excel, shopping cart, and PDF receipt via email.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'PDFKit', 'Nodemailer'],
    github: 'https://github.com/georgebetsios/Thesis_Eshop',
  },
  {
    id: 7,
    title: 'Todo App',
    description: 'A modern and secure ToDo app featuring user authentication and personalized task management in real-time.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'React', 'Axios', 'CSS Modules'],
    github: 'https://github.com/georgebetsios/todo-app',
  },
  {
    id: 8,
    title: 'Java Mini Projects',
    description: 'A collection of 3 small Java desktop applications including a Stopwatch, Calculator, and Weather App built with Swing/AWT.',
    technologies: ['Java', 'Swing', 'AWT'],
    github: 'https://github.com/georgebetsios/java-projects',
  },
];

const ProjectCard = ({ project, refProp }) => {
  return (
    <div className="project-card" ref={refProp}>
      <h2>{project.title}</h2>
      
      <p className="project-description">{project.description}</p>
      
      <h4 className="technologies">Technologies:</h4>
      
      <p className="project-tech-list">{project.technologies.join(', ')}</p>

      {project.github && (
        <div className="github-link-container">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
          >
            <FaGithub className="github-icon" />
            GitHub
          </a>
        </div>
      )}
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
            observer.unobserve(entry.target); 
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
