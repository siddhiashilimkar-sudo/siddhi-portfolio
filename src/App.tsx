import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Siddhi.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
   className="resume-button"
  href="/Siddhi-Shilimkar-Resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  Resume
</a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-tag">👋 Hello, I'm</p>

          <h1>
            Siddhi
            <span> Shilimkar</span>
          </h1>

          <h2>Data Analyst & Business Intelligence Enthusiast</h2>

          <p className="hero-description">
            I transform data into meaningful insights, dashboards, and
            practical business solutions using Python, SQL, Excel, and
            Power BI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects →
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/siddhi-shilimkar-a5b009372"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/siddhiashilimkar-sudo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="data-card">
            <div className="card-top">
              <span>DATA</span>
              <span>✦</span>
            </div>

            <div className="chart">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
              <div className="bar bar-5"></div>
            </div>

            <div className="card-bottom">
              <span>Insights</span>
              <strong>→</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning Data Into Decisions</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Siddhi Shilimkar, a B.Tech Computer Science student
              specializing in Artificial Intelligence & Data Science.
            </p>

            <p>
              I enjoy working with data, finding patterns, building
              dashboards, and converting raw information into insights
              that can support better business decisions.
            </p>

            <p>
              I'm currently looking for internship opportunities where I
              can apply my technical and analytical skills while learning
              from real-world projects.
            </p>
          </div>

          <div className="about-stats">
            <div>
              <strong>2028</strong>
              <span>Graduation</span>
            </div>

            <div>
              <strong>7.46</strong>
              <span>Current CGPA</span>
            </div>

            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>AI & DS</strong>
              <span>Specialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>MY TOOLKIT</p>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Data analysis, automation & backend development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>SQL</h3>
            <p>Queries, databases & data manipulation</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <h3>Power BI</h3>
            <p>Interactive dashboards & business intelligence</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📈</div>
            <h3>Excel</h3>
            <p>Analysis, reporting & data visualization</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>Object-oriented programming & problem solving</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Interactive web applications & frontend development</p>
          </div>
        </div>
      </section>

            {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Project</h2>
        </div>

        <div className="projects-grid single-project">
          <article className="project-card">
            <div className="project-number">01</div>

            <div className="project-content">
              <p className="project-type">3D WEB EXPERIENCE</p>

              <h3>Bubble Jellyy — Interactive 3D Menu</h3>

              <p>
                A modern digital menu for a bubble tea business, designed
                to showcase drinks through an interactive 3D experience.
                The project brings together product presentation, menu
                browsing, and an online ordering experience.
              </p>

              <div className="tech-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Three.js</span>
                <span>Vite</span>
                <span>Vercel</span>
              </div>

              <a
                href="https://bubble-jellyy-3d-menu.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Live Project →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>Academic Journey</h2>
        </div>

        <div className="education-card">
          <div className="education-year">2024 — 2028</div>

          <div>
            <h3>B.Tech — Computer Science Engineering</h3>

            <h4>Artificial Intelligence & Data Science</h4>

            <p>
              Pimpri Chinchwad University (PCU)
              <br />
              School of Engineering & Technology
            </p>

            <span className="cgpa">CGPA: 7.46</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <p>LET'S CONNECT</p>

          <h2>
            Looking for an opportunity
            <br />
            to learn & contribute.
          </h2>

          <p className="contact-description">
            I'm currently open to internship opportunities in Data
            Analytics, Business Intelligence and Data Science.
          </p>

          <a
            href="siddhiashilimkar@gmail.com"
            className="primary-button"
          >
            Get In Touch →
          </a>

          <div className="contact-links">
            <a
              href="https://linkedin.com/in/siddhi-shilimkar-a5b009372"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/siddhiashilimkar-sudo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Siddhi Shilimkar</p>
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;