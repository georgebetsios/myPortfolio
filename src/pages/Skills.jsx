import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const categoriesRef = useRef([]);

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

    categoriesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {[
          {
            title: 'Frontend',
            items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React.js', 'Responsive Design'],
          },
          {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB / Mongoose', 'SQL / MySQL'],
          },
          {
            title: 'Tools & Other',
            items: ['Git & GitHub', 'Postman', 'VS Code'],
          },
          {
            title: 'Programming Languages',
            items: ['Java', 'Python', 'C++'],
          },
        ].map((cat, i) => (
          <div
            key={i}
            className="skills-category"
            ref={(el) => (categoriesRef.current[i] = el)}
          >
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
