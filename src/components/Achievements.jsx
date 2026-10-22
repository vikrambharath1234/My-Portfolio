// Achievements.jsx
// A short list of genuine achievements from portfolioData.js.
import { achievements } from '../data/portfolioData.js'

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievement-list">
          {achievements.map((item) => (
            <li key={item} className="achievement-item">
              <span className="achievement-marker" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
