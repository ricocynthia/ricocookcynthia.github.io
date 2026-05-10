import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio.js'
import './Experience.css'

function ExpRow({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div className={`exp-row ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="exp-date">{item.dates}</div>
      <div className="exp-info">
        <div className="exp-role">
          {item.title}<br />
          <span className="exp-at">at {item.company}</span>
        </div>
        <p className="exp-desc">{item.description}</p>
        {item.highlights.length > 0 && (
          <ul className="exp-hl">
            {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
      </div>
      <div className="exp-tags">
        {item.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
      </div>
      <div className="exp-toggle"><span>+</span></div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()
  return (
    <section id="work" className="exp">
      <div className={`section-head reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div>
          <p className="eyebrow exp-eyebrow">Experience</p>
          <h2 className="section-title exp-title">Where I've <span className="it exp-it">built things.</span></h2>
        </div>
      </div>
      <div className="exp-list">
        {experience.map((item, i) => (
          <ExpRow key={item.company + item.dates} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  )
}
