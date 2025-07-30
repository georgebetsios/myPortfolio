import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

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
    title: 'Java Mini Projects',
    description: 'A collection of 3 small Java desktop applications including a Stopwatch, Calculator, and Weather App. Demonstrates Java GUI development with Swing/AWT and basic functionalities for each tool.',
    technologies: ['Java', 'Swing', 'AWT'],
    github: 'https://github.com/georgebetsios/java-projects',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
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
  return (
    <div className="projects-section">
      <div className="projects-title">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
