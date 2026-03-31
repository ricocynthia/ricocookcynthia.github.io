import { skills } from '../data/portfolio.js'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills-section">
      <p className="section-label">Skills</p>
      <h2 className="section-title">My <em>toolkit.</em></h2>
      <div className="skills-grid">
        {skills.map(group => (
          <div key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <ul className="skill-list">
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
