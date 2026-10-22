// Projects.jsx
// The Projects section. It loops over the projects in portfolioData.js
// and shows one ProjectCard for each.
import { projects } from '../data/portfolioData.js'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Projects built through hands-on learning.</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
