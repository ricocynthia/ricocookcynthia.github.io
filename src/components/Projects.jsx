import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Projects.css'

const SPECIMENS = [
  {
    name: 'Forage & Heal',
    desc: 'A searchable reference for wild plants and medicinal mushrooms in Minnesota. Search by name or healing property, filter by category.',
    tags: ['frontend', 'nature'],
    stack: 'React · GH Pages',
    github: 'https://github.com/ricocynthia/forage-and-heal',
    live: 'https://ricocynthia.github.io/forage-and-heal/',
    size: 'sz-half',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Botanica API',
    desc: 'The Go backend powering Forage & Heal. gRPC + REST BFF — the same pattern I use daily at Alaska.',
    tags: ['backend', 'nature'],
    stack: 'Go · gRPC · Railway',
    github: 'https://github.com/ricocynthia/botanica',
    size: 'sz-half',
    img: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1200&q=80',
  },
]

const FILTERS = ['all', 'frontend', 'backend', 'nature']

function SpecCard({ spec, hidden }) {
  return (
    <article
      className={`spec-card ${spec.size}`}
      style={{
        opacity: hidden ? '.18' : '1',
        transform: hidden ? 'scale(.97)' : '',
        filter: hidden ? 'grayscale(.6)' : '',
        pointerEvents: hidden ? 'none' : 'auto',
        transition: 'opacity .3s, transform .3s, filter .3s',
      }}
    >
      <div className="spec-img">
        <img src={spec.img} alt="" />
      </div>
      <div className="spec-body">
        <div>
          <div className="spec-name">{spec.name}</div>
          <p className="spec-desc">{spec.desc}</p>
        </div>
        <div className="spec-meta">
          <span>{spec.stack}</span>
          <span className="spec-links">
            {spec.github && <a href={spec.github} target="_blank" rel="noopener noreferrer">GitHub <span className="arr">↗</span></a>}
            {spec.live && <a href={spec.live} target="_blank" rel="noopener noreferrer">Live <span className="arr">↗</span></a>}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="specimen">
      <div className="spec-head reveal in">
        <div>
          <p className="eyebrow">Specimen gallery</p>
          <h2 className="section-title">Things I build <span className="it">for fun.</span></h2>
        </div>
        <div className="spec-tabs">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`spec-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={`spec-grid stagger ${inView ? 'in' : ''}`} ref={ref}>
        {SPECIMENS.map(s => (
          <SpecCard
            key={s.name}
            spec={s}
            hidden={filter !== 'all' && !s.tags.includes(filter)}
          />
        ))}
      </div>
    </section>
  )
}
