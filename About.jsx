const interests = ['AI / Machine Learning', 'Software Development', 'Data Analysis']

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am Kavita Zore, an M.Sc. Industrial Mathematics with Computer Applications
              (IMCA) student at Fergusson College, Pune, with a strong interest in software
              development, data analytics, and machine learning.
            </p>
            <p>
              With a foundation in mathematics and computer science, I enjoy combining
              analytical thinking with practical programming to solve problems and build
              meaningful solutions. I am passionate about exploring data, developing
              software applications, and understanding how AI and machine learning can
              address real-world challenges.
            </p>
            <p>
              I believe in continuous learning, hands-on experience, and improving my skills
              by working on practical projects. I enjoy exploring new technologies, taking on
              challenges, and turning ideas into effective solutions.
            </p>
            {/* Career goal – highlighted with a coloured bar (see .about-goal in App.css) */}
            <p className="about-goal">
              <b>
                My goal is to grow as a software developer or data/ML professional,
                contribute to impactful projects, and build technology-driven solutions that
                create real value.
              </b>
            </p>
            <p>
              I am always eager to learn, collaborate, and explore new opportunities that
              help me grow both technically and professionally.
            </p>
          </div>

          {/* Interests shown in one line below the text */}
          <div className="about-interests">
            <h3>Interests:</h3>
            <ul className="tag-list">
              {interests.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
