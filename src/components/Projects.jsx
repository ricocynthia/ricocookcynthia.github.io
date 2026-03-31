import { projects } from '../data/portfolio.js'
import './Projects.css'

function ProjectIcon({ color }) {
  console.log('rendering icon with color', color)
  if (color === 'moss') return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 38 Q20 20 20 8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
      <ellipse cx="14" cy="22" rx="10" ry="5" fill="rgba(255,255,255,0.15)" transform="rotate(-20 14 22)"/>
      <ellipse cx="26" cy="18" rx="9" ry="4.5" fill="rgba(255,255,255,0.15)" transform="rotate(15 26 18)"/>
      <ellipse cx="13" cy="14" rx="8" ry="4" fill="rgba(255,255,255,0.15)" transform="rotate(-30 13 14)"/>
      <ellipse cx="27" cy="11" rx="7" ry="3.5" fill="rgba(255,255,255,0.15)" transform="rotate(25 27 11)"/>
    </svg>
  )
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="12" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <circle cx="20" cy="20" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.35)"/>
      <path d="M20 8 L20 4 M20 36 L20 32 M8 20 L4 20 M36 20 L32 20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className={`project-top ${project.color}`}>
        <ProjectIcon color={project.color} />
      </div>
      <div className="project-body">
        <div className="project-name">{project.name}</div>
        <p className="project-desc">{project.description}</p>
        <div className="tags" style={{ marginBottom: '1rem' }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live app</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Things I build <em>for fun.</em></h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
