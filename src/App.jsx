
import './App.css'

function App() {
  const projects = [
    {
      id: 'portfolio',
      title: "Portfolio",
      description: "Personal portfolio showcasing creative development and design works.",
      link: "https://alldone03.github.io/portofolio/",
      icon: "👤",
      color: "var(--primary)"
    },
    {
      id: 'pdf-tools',
      title: "PDF Tools",
      description: "A collection of web-based utilities for managing and processing PDF documents.",
      link: "https://alldone03.github.io/pdf-tools/",
      icon: "📄",
      color: "var(--secondary)"
    },
    {
      id: 'labelling-tools',
      title: "Labelling Tools",
      description: "Advanced AI-powered annotation tool for machine learning datasets.",
      link: "https://alldone03.github.io/labelling_tools/",
      icon: "🏷️",
      color: "var(--accent)"
    },
    {
      id: 'SpidoNote',
      title: "SpidoNote",
      description: "Note Health of your vehicle.",
      link: "https://alldone03.github.io/spidonote/",
      icon: "🏷️",
      color: "var(--accent)"
    }
  ]

  return (
    <div className="hub-container">
      <div className="hero-bg"></div>

      <header className="hub-header animate-fadeIn">
        <h1 className="logo-text gradient-text">ALLDONE HUB</h1>
        <p className="subtitle">Select a project to explore</p>
      </header>

      <main className="projects-grid container">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            className="project-hub-card glass animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-content">
              <div className="card-icon" style={{ background: `rgba(255,255,255,0.05)`, borderColor: project.color }}>
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="card-footer">
                <span className="launch-text" style={{ color: project.color }}>Launch Project</span>
                <span className="arrow">→</span>
              </div>
            </div>
            <div className="card-glow" style={{ background: project.color }}></div>
          </a>
        ))}
      </main>

      <footer className="hub-footer">
        <p>&copy; {new Date().getFullYear()} alldone03. Centralized Project Hub.</p>
      </footer>
    </div>
  )
}

export default App
