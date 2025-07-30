import '../styles/Skills.css';

const Skills = () => {

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skills-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>MongoDB / Mongoose</li>
            <li>SQL / MySQL</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Tools & Other</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Skills;
