import { useState } from 'react'

// Each link scrolls to the section whose id matches the href (e.g. #about)
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

// Props come from App.jsx: the current theme and the function that switches it
function Navbar({ theme, toggleTheme }) {
  // useState: is the mobile menu open? false = closed, true = open
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo: gradient "KZ" badge – hover animation is in App.css */}
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Kavita Zore – go to top">
          <span className="logo-mark">
            <span className="logo-letters">KZ</span>
          </span>
        </a>

        {/* On mobile this list is hidden until menuOpen becomes true */}
        <nav
          id="primary-navigation"
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger button – only visible on small screens (see App.css) */}
          <button
            type="button"
            className={menuOpen ? 'hamburger is-open' : 'hamburger'}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
