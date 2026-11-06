// Skills are grouped so each group becomes one card
const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'React', 'Spring Boot'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Data & Tools',
    items: ['Pandas', 'NumPy', 'Power BI', 'Git & GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I Work With</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
