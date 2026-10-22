// Navbar.jsx
// The top navigation bar. On small screens it shows a menu button
// that opens and closes the list of links.
import { useState } from 'react'
import { navLinks, personal } from '../data/portfolioData.js'

function Navbar() {
  // isMenuOpen is true when the mobile menu is showing.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu after a link is clicked.
  function handleLinkClick() {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={handleLinkClick}>
          {personal.name}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="main-navigation"
          className={isMenuOpen ? 'nav-links nav-links-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
