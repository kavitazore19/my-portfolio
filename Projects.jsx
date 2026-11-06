import { useState } from 'react'

// Filter buttons shown above the project cards.
// Each button text must match a project's `category` exactly (except 'All').
const categories = ['All', 'Data', 'Web Development', 'AI/ML']

const projects = [
  {
    title: 'AI-Based Multi-Source Phishing Detection',
    category: 'AI/ML',
    description:
      'Ongoing research project that uses machine learning to detect phishing attempts by combining evidence from multiple sources.',
    tech: ['Python', 'Machine Learning'],
    github: '',
    status: 'Ongoing',
  },
  {
    title: 'DataSmiths',
    category: 'Data',
    description:
      'Data analysis and visualization project that explores datasets to find patterns and presents the insights through charts and dashboards.',
    tech: ['Python', 'Pandas', 'NumPy', 'Power BI'],
    github: 'https://github.com/kavitazore19/DataSmiths',
    status: 'Completed',
  },
  {
    title: 'CampusConnect',
    category: 'Web Development',
    description:
      'A college communication platform that helps students and faculty share updates and stay connected.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kavitazore19/CampusConnect',
    status: 'Completed',
  },
  {
    title: 'Customer Shopping Behaviour',
    category: 'Data',
    description:
      'Analysis of customer shopping data to understand purchasing patterns, trends and customer segments.',
    tech: ['Python', 'Pandas', 'SQL'],
    github: 'https://github.com/kavitazore19/CustomerShoppingBehaviour',
    status: 'Completed',
  },
]

function Projects() {
  // useState: which filter button is selected right now
  const [activeFilter, setActiveFilter] = useState('All')

  // Keep every project when "All" is selected, otherwise only matching ones
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I Have Built</h2>

        {/* Filter buttons */}
        <div className="filter-buttons" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeFilter === category ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* aria-live lets screen readers announce the new count */}
        <p className="projects-count" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects
        </p>

        {/* Changing the `key` makes React rebuild the grid, so the
            fade-in animation plays again every time the filter changes */}
        <div className="projects-grid" key={activeFilter}>
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 80}ms` }} // cards appear one after another
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                {project.status === 'Ongoing' && (
                  <span className="project-status">Ongoing</span>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="tag-list project-tech">
                {project.tech.map((tool) => (
                  <li key={tool} className="tag tag-small">
                    {tool}
                  </li>
                ))}
              </ul>

              {/* Show a real link only when one exists */}
              {project.github ? (
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <span className="btn-icon" aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="project-link-soon">GitHub link coming soon</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
