// Experience.jsx
// Work experience shown as a simple timeline.
import { experience } from '../data/portfolioData.js'

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Practical industry training.</p>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.organization} className="timeline-item">
              <p className="timeline-meta">
                {job.duration} · {job.location}
              </p>
              <h3 className="card-title">{job.role}</h3>
              <p className="timeline-org">{job.organization}</p>
              <ul className="bullet-list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
