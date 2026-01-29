import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Task Management Suite",
      description: "A comprehensive solution for team productivity with real-time collaboration features.",
      tags: ["React", "Node.js", "PostgreSQL"],
      icon: "⚡"
    },
    {
      title: "FinTech Dashboard",
      description: "Advanced data visualization for financial assets and crypto portfolio tracking.",
      tags: ["D3.js", "TypeScript", "Next.js"],
      icon: "💎"
    },
    {
      title: "AI Image Generator",
      description: "Cloud-based AI implementation for generating architectural designs from sketches.",
      tags: ["Python", "Tensorflow", "React"],
      icon: "🎨"
    }
  ]

  return (
    <div className="portfolio">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo-text gradient-text">ALLLDONE</div>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="mailto:contact@example.com" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container animate-fadeIn">
          <div className="hero-content">
            <span className="hero-tag">Available for work</span>
            <h1 className="hero-title">
              Crafting <span className="gradient-text">Seamless</span> Digital Experiences
            </h1>
            <p className="hero-description">
              I'm alldone03, a Creative Developer specializing in building high-performance
              web applications with a focus on aesthetics and user experience.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
            </div>
          </div>
        </div>
      </header>

      <section id="projects" className="section container">
        <h2 className="section-title">Featured Works</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tag-list">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} alldone03. Designed with passion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
