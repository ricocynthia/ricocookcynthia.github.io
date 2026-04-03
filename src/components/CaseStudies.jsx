import { useNavigate } from 'react-router-dom'
import { caseStudies } from '../data/portfolio.js'
import './CaseStudies.css'

function CaseStudyCard({ study }) {
  const navigate = useNavigate()
  return (
    <div className="cs-card" onClick={() => navigate(study.path)}>
      <div className={`cs-card-top ${study.color}`}>
        <div className="cs-card-label">Case study</div>
        <div className="cs-card-tag-row">
          {study.tags.slice(0, 3).map(t => (
            <span key={t} className="cs-tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="cs-card-body">
        <div className="cs-card-name">{study.name}</div>
        <p className="cs-card-desc">{study.description}</p>
        <div className="cs-card-meta">
          <span className="cs-card-timeline">{study.timeline}</span>
          <span className="cs-card-link">Read case study →</span>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="cs-section">
      <p className="section-label">Case studies</p>
      <h2 className="section-title">How I think through <em>hard problems.</em></h2>
      <div className="cs-grid">
        {caseStudies.map(s => <CaseStudyCard key={s.id} study={s} />)}
      </div>
    </section>
  )
}