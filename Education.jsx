// Education details – newest first. Shown as a vertical timeline of cards.
const educationList = [
  {
    degree: 'M.Sc.',
    subject: 'Industrial Mathematics with Computer Applications (IMCA)',
    placeLabel: 'College',
    place: 'Fergusson College, Pune, Maharashtra',
    cgpa: '8.4/10',
    duration: '2025–2027',
  },
  {
    degree: 'B.Sc.',
    subject: 'Mathematics',
    placeLabel: 'University',
    place: 'Savitribai Phule Pune University',
    cgpa: '9.04/10',
    duration: '2022–2025',
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">My Education</h2>

        <ol className="timeline">
          {educationList.map((item) => (
            <li key={item.degree} className="timeline-item">
              <article className="edu-card">
                <div className="edu-icon" aria-hidden="true">
                  🎓
                </div>

                <div className="edu-body">
                  <h3>
                    {item.degree} — {item.subject}
                  </h3>
                  <p className="edu-place">
                    <strong>{item.placeLabel}:</strong> {item.place}
                  </p>

                  {/* Duration and CGPA shown as clear badges */}
                  <div className="edu-badges">
                    <span className="edu-badge">
                      <span aria-hidden="true">📅</span> {item.duration}
                    </span>
                    <span className="edu-badge edu-badge-cgpa">CGPA: {item.cgpa}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Education
