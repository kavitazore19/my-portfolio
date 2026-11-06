import { useEffect } from 'react'

// Pop-up window that shows the resume, with a Download button.
// Opened from the "View Resume" button in Home.jsx.
function ResumeViewer({ onClose }) {
  // useEffect: while the viewer is open,
  // 1) the Escape key closes it, and 2) the page behind it can't scroll.
  // The "return" function undoes both when the viewer closes.
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    // Clicking the dark background closes the viewer
    <div className="resume-overlay" onClick={onClose}>
      <div
        className="resume-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        onClick={(event) => event.stopPropagation()} // clicks inside don't close it
      >
        <div className="resume-header">
          <h2 id="resume-title">My Resume</h2>
          <button
            type="button"
            className="resume-close"
            onClick={onClose}
            aria-label="Close resume"
            autoFocus
          >
            ✕
          </button>
        </div>

        {/* Picture of the resume page (works on every phone and browser) */}
        <div className="resume-body">
          <img src="/resume-preview.png" alt="Resume of Kavita Zore" className="resume-image" />
        </div>

        <div className="resume-actions">
          {/* Opens the PDF in a new tab, where it can be zoomed (handy on phones) */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Open full size <span className="btn-icon" aria-hidden="true">↗</span>
          </a>
          <a href="/resume.pdf" download="Kavita_Zore_Resume.pdf" className="btn btn-primary">
            Download Resume <span className="btn-icon btn-icon-down" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResumeViewer
