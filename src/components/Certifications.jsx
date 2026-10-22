// Certifications.jsx
// Certification cards. Certificate images are shown when available.
import { certifications } from '../data/portfolioData.js'

function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Recognised learning and participation.</p>

        <div className="cards-grid">
          {certifications.map((cert) => (
            <div key={cert.title + cert.issuer} className="card cert-card">
              {/* Show the certificate image when there is one, otherwise a simple badge. */}
              {cert.image ? (
                <img
                  className="cert-image"
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  loading="lazy"
                />
              ) : (
                <span className="cert-icon" aria-hidden="true">
                  {cert.shortLabel}
                </span>
              )}
              <h3 className="card-title">{cert.issuer}</h3>
              <p className="card-text">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
