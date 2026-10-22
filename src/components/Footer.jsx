// Footer.jsx
// The footer at the bottom of the page.
import { personal } from '../data/portfolioData.js'

function Footer() {
  // Show the current year automatically, so you never need to update it.
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{personal.name}</p>
          <p className="footer-role">{personal.role}</p>
        </div>
        <p>
          © {currentYear} {personal.name}. Built with React and Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
