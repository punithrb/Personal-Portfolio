import React, { useEffect } from 'react';
import {
  heroData,
  aboutData,
  educationData,
  skillsData,
  experienceData,
  projectsData,
  certificationsData,
  contactData
} from './data';
import './styles.css';
import profileImg from './assets/profile.jpg';
import resumePdf from './assets/Punith-RB-Resume.pdf';
import GitHubCalendar from 'github-calendar';


const App = () => {
  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  useEffect(() => {
    GitHubCalendar('.calendar', 'punithrb', {
      responsive: true
    });
  }, []);

  return (
    <div className="app-root">
      <div className="app-glow" />
      <header className="nav-bar">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <div className="nav-logo-badge">P</div>
            <div className="nav-logo-text">
              <span>Punith R B</span>
              <span>Portfolio</span>
            </div>
          </div>
          <nav className="nav-links">
            <a className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a className="nav-link" onClick={() => scrollToSection('education')}>
              Education
            </a>
            <a className="nav-link" onClick={() => scrollToSection('skills')}>
              Skills
            </a>
            <a className="nav-link" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
            <a className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="app-shell">
        {/* Hero  */}
        <section id="hero" className="section hero">
          <div className="hero-main">
            <div className="hero-pill">
              <div className="hero-pill-dot" />
              <span>Available for full-time roles</span>
            </div>
            <h1 className="hero-title">
              <span>{heroData.name}</span> — {heroData.role}
            </h1>
            <p className="hero-subtitle">{heroData.tagline}</p>

            <div className="hero-meta">
              <div className="hero-meta-pill">
                <div className="hero-meta-dot" /> {heroData.location}
              </div>
              <div className="hero-meta-pill">MERN · Python · DSA</div>
              <div className="hero-meta-pill">React · Node · MongoDB</div>
            </div>


            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                {heroData.primaryAction}
                <span>↗</span>
              </button>

              <button
                className="btn-download"
                onClick={() => scrollToSection('contact')}
              >
                <span>{heroData.secondaryAction}</span>
              </button>


              <a href={resumePdf} className="btn-download" download>
                <span>Download Resume</span>
                <span>↓</span>
              </a>
            </div>


            <div className="hero-secondary-row">
              <span className="hero-secondary-pill">
                Currently · Graduate Engineer Trainee @ HCLTech
              </span>
              {/* <span>Building scalable and user‑centric web solutions.</span> */}
            </div>
          </div>

          <div className="hero-profile">
            <div className="hero-card">
              <div className="hero-card-inner">
                <div className="hero-card-header">
                  <span>Profile Snapshot</span>
                  <span className="hero-card-chip">Computer Science · 2025</span>
                </div>
                <div className="hero-card-body">
                  <div className="hero-avatar-wrap">
                    <div className="hero-avatar-glow" />
                    <div className="hero-avatar-ring">
                      <div className="hero-avatar">
                        <img src={profileImg} alt="Punith profile" />
                      </div>
                    </div>
                  </div>
                  <div className="hero-card-name">{heroData.name}</div>
                  <div className="hero-card-role">{heroData.role}</div>
                  <div className="hero-card-badges">
                    <span className="hero-badge">MERN Stack</span>
                    <span className="hero-badge">Python Automation</span>
                    <span className="hero-badge">DSA</span>
                  </div>
                </div>
                <div className="hero-card-footer">
                  <div className="hero-card-footer-col">
                    <span>Experience</span>
                    <br />
                    <span>HCLTech · Trainee</span>
                  </div>
                  <div className="hero-card-footer-col">
                    <span>Education</span>
                    <br />
                    <span>BE CSE · 8.018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="section-header">
            <div>
              <div className="section-tag">About</div>
              <div className="section-title">
                Who is Punith?
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="about-grid">
            <div className="card tile-hover">

              <div className="card-title">Overview</div>
              <div className="card-body">{aboutData.summary}</div>
            </div>
            <div className="card tile-hover">

              <div className="card-title">What I do</div>
              <ul className="card-list">
                {aboutData.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="education" className="section">
          <div className="section-header">
            <div>
              {/* <div className="section-tag">Path</div> */}
              <div className="section-title">
                Education & Experience
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="about-grid">
            <div className="card tile-hover">

              <div className="card-title">Education</div>
              <div className="card-body">
                <div className="education-list">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="edu-item">
                      <div className="edu-header">
                        <div>
                          <div className="edu-degree">{edu.degree}</div>
                          <div className="edu-meta">
                            {edu.institution} · {edu.year}
                          </div>
                        </div>

                        <div className="edu-metric-wrap">
                          {edu.gpa && <div className="edu-gpa">{edu.gpa}</div>}
                          {edu.percentage && (
                            <div className="edu-gpa">{edu.percentage}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card tile-hover">

              <div className="card-title">Experience</div>
              <div className="card-body">
                <div className="experience-list">
                  {experienceData.map((exp, idx) => (
                    <div key={idx} className="exp-item">
                      <div className="exp-header">
                        <div>
                          <div className="exp-role">
                            {exp.role} @ {exp.company}
                          </div>
                          <div className="exp-meta">
                            {exp.location} · {exp.period}
                          </div>
                        </div>
                      </div>
                      <ul className="exp-points">
                        {exp.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="section-header">
            <div>
              {/* <div className="section-tag">Stack</div> */}
              <div className="section-title">
                Skills & Tools
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="card tile-hover">

            <div className="card-body">
              <div className="skills-grid">
                <SkillGroup
                  label="Programming Languages"
                  items={skillsData.programmingLanguages}
                />
                <SkillGroup label="Frontend" items={skillsData.frontend} />
                <SkillGroup label="Backend" items={skillsData.backend} />
                <SkillGroup label="Database" items={skillsData.database} />
                <SkillGroup label="Developer Tools" items={skillsData.tools} />
                <SkillGroup label="Other" items={skillsData.other} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-header">
            <div>
              {/* <div className="section-tag">Work</div> */}
              <div className="section-title">
                Selected Projects
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="projects-grid">
            {projectsData.map((p, idx) => (
              <article key={idx} className="project-card">
                <div className="project-title-row">
                  <h3 className="project-title">{p.title}</h3>
                  {/* <span className="project-tag">Case Study</span> */}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.github && p.github !== '#' && (
                    <a
                      className="project-link"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <div className="section-header">
            <div>
              {/* <div className="section-tag">Creds</div> */}
              <div className="section-title">
                Certifications
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="card tile-hover">

            <div className="card-body">
              {certificationsData.map((cert, idx) => (
                <div key={idx} style={{ marginBottom: '10px', fontSize: '13px' }}>
                  <strong>{cert.title}</strong> · {cert.issuer}
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                    {cert.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* GitHub Activity */}
<section className="section">
  <div className="section-header">
    <div>
      <div className="section-tag">GitHub</div>
      <div className="section-title">
        Activity & Stats
        <div className="section-title-glow" />
      </div>
    </div>
  </div>

  <div className="card tile-hover">
    <div className="card-body github-stats-wrap">
      {/* 1. Contributions calendar */}
      <img
        src="https://ghchart.rshah.org/22d3ee/punithrb"
        alt="GitHub contribution calendar for punithrb"
        className="github-stats-img"
      />

      {/* 2. Main stats */}
      <img
        src="https://github-readme-stats-git-masterorgs-github-readme-stats-team.vercel.app/api?username=punithrb&show_icons=true&theme=tokyonight&hide_border=true"
        alt="GitHub Stats"
        className="github-stats-img"
      />

      {/* 3. Streak stats */}
      <img
        src="https://github-readme-streak-stats.herokuapp.com?user=punithrb&theme=tokyonight&hide_border=true"
        alt="GitHub Streak Stats"
        className="github-stats-img"
      />

      {/* 4. Top languages */}
      <img
        src="https://github-readme-stats-git-masterorgs-github-readme-stats-team.vercel.app/api/top-langs/?username=punithrb&layout=compact&theme=tokyonight&hide_border=true"
        alt="Top Languages"
        className="github-stats-img"
      />
    </div>
  </div>
</section>








        {/* Contact */}
        <section id="contact" className="section">
          <div className="section-header">
            <div>
              {/* <div className="section-tag">Connect</div> */}
              <div className="section-title">
                Let&apos;s collaborate
                <div className="section-title-glow" />
              </div>
            </div>
          </div>
          <div className="contact-grid card">
            <div>
              <div className="card-title">Direct lines</div>
              <div className="card-body">
                <div className="contact-info-list">
                  <div className="contact-row">
                    <div>
                      <div className="contact-label">Phone</div>
                      <div className="contact-value">{"+91  " + contactData.phone}</div>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div>
                      <div className="contact-label">Email</div>
                      <div className="contact-value">{contactData.email}</div>
                    </div>
                    <a
                      className="contact-link"
                      href={`mailto:${contactData.email}`}
                    >
                      Say hi
                    </a>
                  </div>
                  <div className="contact-row">
                    <div>
                      <div className="contact-label">GitHub</div>
                      {/* <div className="contact-value">
                        {contactData.github === '#'
                          ? 'https://github.com/punithrb'
                          : contactData.github}
                      </div> */}
                      <div className="contact-value">{contactData.github}</div>
                    </div>
                    {contactData.github !== '#' && (
                      <a
                        className="contact-link"
                        href={contactData.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    )}
                  </div>
                  <div className="contact-row">
                    <div>
                      <div className="contact-label">LinkedIn</div>
                      <div className="contact-value">{contactData.linkedin}</div>

                    </div>
                    {contactData.linkedin !== '#' && (
                      <a
                        className="contact-link"
                        href={contactData.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card-title">Quick message</div>
              <div className="card-body">
                <form
                  className="contact-form"
                  onSubmit={e => {
                    e.preventDefault();
                    alert(
                      'This demo form does not send yet. Connect via email instead.'
                    );
                  }}
                >
                  <div className="input-row">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        className="input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="input"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="textarea"
                      placeholder="Project idea, collaboration, or opportunity..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Download Resume */}
        <footer className="footer">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} {heroData.name}.</span>
            <span>Crafted with React & Vite.</span>
          </div>

        </footer>
      </main>
    </div>
  );
};

const SkillGroup = ({ label, items }) => (
  <div>
    <div className="skills-group-title">{label}</div>
    <div className="skill-chips">
      {items.map((item, idx) => (
        <span key={idx} className="skill-chip">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default App;
