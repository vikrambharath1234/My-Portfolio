// Education.jsx
// Education details and relevant coursework.
import { education } from '../data/portfolioData.js'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <p className="timeline-meta">
            {education.duration} · {education.location}
          </p>
          <h3 className="card-title">{education.degree}</h3>
          <p className="timeline-org">{education.department}</p>
          <p className="card-text">{education.college}</p>

          <h4 className="sub-heading">Relevant Coursework</h4>
          <ul className="badge-list">
            {education.coursework.map((course) => (
              <li key={course} className="badge">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
