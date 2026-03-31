import { experience } from '../data/portfolio.js'
import './Experience.css'

function Tag({ label }) {
  return <span className="tag">{label}</span>
}

function ExpItem({ item }) {
  return (
    <div className="exp-item">
      <div className="exp-meta">
        <div className="exp-date">{item.dates}</div>
        <div className="exp-company">{item.company}</div>
      </div>
      <div>
        <div className="exp-title">{item.title}</div>
        <p className="exp-desc">{item.description}</p>
        {item.highlights.length > 0 && (
          <ul className="exp-highlights">
            {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        <div className="tags">
          {item.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="work" className="experience-section">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Where I've <em>built.</em></h2>
      {experience.map(item => <ExpItem key={item.id} item={item} />)}
    </section>
  )
}
