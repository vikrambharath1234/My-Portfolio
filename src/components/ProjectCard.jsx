// ProjectCard.jsx
// One project card: a thumbnail image, the title, description, badges, and EXACTLY two buttons.
// Button 1: GitHub Repository (outlined). Button 2: Live Demo (primary).
function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      {/* Project thumbnail image (from public/images). */}
      <img
        className="project-thumb"
        src={project.thumbnail}
        alt={`Screenshot of the ${project.title} project`}
        loading="lazy"
      />

      <h3 className="card-title">{project.title}</h3>
      <p className="card-text">{project.description}</p>

      <ul className="badge-list">
        {project.technologies.map((tech) => (
          <li key={tech} className="badge">
            {tech}
          </li>
        ))}
      </ul>

      {/* Backend repository as an ordinary text link, not a button. */}
      {project.backendUrl && (
        <p className="backend-link">
          Backend repository:{' '}
          <a href={project.backendUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      )}

      {/* Exactly two buttons go below the project information. */}
      <div className="button-row project-buttons">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-outline"
        >
          GitHub Repository
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          Live Demo
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
