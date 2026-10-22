// About.jsx
// The About Me section: a heading and the full introduction text.
// This section has no side box, card, or decorative panel.
import { personal } from '../data/portfolioData.js'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          {/* Each paragraph comes from portfolioData.js */}
          {personal.summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
