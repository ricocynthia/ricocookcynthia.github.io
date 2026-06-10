import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { caseStudies } from '../data/portfolio.js'
import botanica from '../assets/botanica.jpg' // TODO: replace with dedicated image
import './CaseStudies.css'

const IMAGES = {
  'hawaiian-acquisition': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
  'sdc-eligibility': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  'agent-assist': botanica,
}

const META = {
  'hawaiian-acquisition': { timeline: '~ One month', role: 'Tech lead', context: 'Alaska × Hawaiian' },
  'sdc-eligibility': { timeline: 'A few days', role: 'Investigator', context: 'Bug discovery + handoff' },
  'agent-assist': { timeline: 'POC', role: 'Designer + builder', context: 'Applied AI · internal tooling' },
}

function CaseCard({ study, flip, index }) {
  const [ref, inView] = useInView()
  const m = META[study.id] || {}

  return (
    <Link
      className={`case-card reveal ${inView ? 'in' : ''} ${flip ? 'case-card-flip' : ''}`}
      ref={ref}
      to={study.path}
    >
      <div className="case-img">
        <img src={IMAGES[study.id]} alt="" />
        <span className="case-stamp">No. {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="case-body">
        <div>
          <div className="case-meta">
            <span>{m.timeline}</span>
            <span className="case-sep">/</span>
            <span>{m.role}</span>
            <span className="case-sep">/</span>
            <span>{m.context}</span>
          </div>
          <div className="case-name">{study.name}</div>
          <p className="case-desc">{study.description}</p>
          <div className="case-tags">
            {study.tags.map(t => <span key={t} className="case-tag">{t}</span>)}
          </div>
        </div>
        <span className="case-cta">Read case study<span>→</span></span>
      </div>
    </Link>
  )
}

export default function CaseStudies() {
  const [ref, inView] = useInView()
  return (
    <section id="case" className="case-section">
      <div className={`section-head reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div>
          <p className="eyebrow case-eyebrow">Case studies</p>
          <h2 className="section-title case-title">How I think through <span className="it case-it">hard problems.</span></h2>
        </div>
      </div>
      <div className="case-stack">
        {caseStudies.map((s, i) => (
          <CaseCard key={s.id} study={s} flip={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  )
}
