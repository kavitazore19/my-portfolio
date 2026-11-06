// Issuer and date come from the resume (public/resume.pdf).
// Empty values ('') are simply not shown on the card.
const certifications = [
  {
    name: 'Full Stack Software Developer Assessment',
    issuer: 'Coursera',
    year: 'Jan 2026',
    link: '',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    year: 'Jan 2026',
    link: '',
  },
  {
    name: 'Skill Development Certificate',
    issuer: '',
    year: '',
    link: '',
  },
  {
    name: 'Avishkar Certificate',
    issuer: '',
    year: '',
    link: '',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          {certifications.map((cert) => {
            // Join only the details that are filled in, e.g. "Google · 2024"
            const details = [cert.issuer, cert.year].filter(Boolean).join(' · ')

            return (
              <article key={cert.name} className="cert-card">
                <div className="cert-icon" aria-hidden="true">
                  📜
                </div>
                <div>
                  <p className="cert-label">Certificate</p>
                  <h3>{cert.name}</h3>
                  {details && <p className="cert-details">{details}</p>}
                  {cert.link && (
                    <a
                      href={cert.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View certificate <span className="btn-icon" aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
