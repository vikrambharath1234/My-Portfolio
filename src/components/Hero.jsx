// Hero.jsx
// The first section visitors see: name, title, introduction and buttons.
// This section has no side box, card, or decorative panel.
import { personal, resumeFile } from '../data/portfolioData.js'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hello, I am</p>
        <h1 className="hero-name">{personal.name}</h1>
        <p className="hero-role">{personal.role}</p>
        <p className="hero-intro">{personal.introduction}</p>

        <div className="button-row">
          <a href="#projects" className="button button-primary">
            Explore My Projects
          </a>

          {/* The resume file lives in public/resume.pdf.
              It is a temporary dummy resume. Replace that file later with your
              final resume. The download attribute gives the file a clean name. */}
          <a
            href={resumeFile.url}
            download={resumeFile.downloadName}
            className="button button-outline"
          >
            Download Resume
          </a>

          <a href="#contact" className="button button-outline">
            Contact Me
          </a>
        </div>

        <ul className="hero-links" aria-label="Social links">
          <li>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${personal.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
