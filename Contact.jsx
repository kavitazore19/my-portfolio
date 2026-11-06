import socialLinks from './socialLinks'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-intro">
          I am open to internships, projects and collaborations. The quickest way to
          reach me is by email, or connect with me on LinkedIn.
        </p>

        {/* Each contact method becomes one clickable card */}
        <div className="contact-grid">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              // External links open in a new tab; the email link opens the mail app
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon">{item.icon}</span>
              <span>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
