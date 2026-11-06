import socialLinks from './socialLinks'

// Read the year once when the file loads – keeps the copyright up to date automatically
const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Small social icons – same links as the Contact section */}
        <div className="footer-social">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="social-link"
              aria-label={item.label}
              title={item.label}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p>© {year} Kavita Zore</p>
      </div>
    </footer>
  )
}

export default Footer
