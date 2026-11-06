import { useState } from 'react'
import ResumeViewer from './ResumeViewer'

// Home / Hero section – the first thing visitors see
function Home() {
  // useState: is the resume viewer open? false = closed, true = open
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Kavita Zore</h1>
          <p className="hero-tagline">
            M.Sc. Industrial Mathematics with Computer Applications (IMCA)
          </p>
          <p className="hero-college">Fergusson College, Pune, Maharashtra</p>
          <p className="hero-intro">
            A postgraduate student who enjoys turning mathematics and code into useful
            software. I am interested in AI/ML, software development and data analysis.
          </p>

          {/* The small icons inside the buttons move slightly on hover (App.css) */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <span className="btn-icon" aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <span className="btn-icon" aria-hidden="true">→</span>
            </a>
            {/* Opens the resume viewer, which has the Download button */}
            <button type="button" className="btn btn-ghost" onClick={() => setResumeOpen(true)}>
              View Resume <span className="btn-icon" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {/* Initials graphic used instead of a photo */}
        <div className="hero-graphic" aria-hidden="true">
          <div className="initials-ring">
            <div className="initials">KZ</div>
          </div>
        </div>
      </div>

      {/* Shown only while resumeOpen is true */}
      {resumeOpen && <ResumeViewer onClose={() => setResumeOpen(false)} />}
    </section>
  )
}

export default Home
