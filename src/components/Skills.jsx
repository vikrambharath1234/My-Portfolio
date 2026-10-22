// Skills.jsx
// Shows my skills as groups of badges (Frontend, Backend, Database, Developer Tools).
import { skillGroups } from '../data/portfolioData.js'

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I have used to build web applications.</p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="card-title">{group.title}</h3>
              <ul className="badge-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
