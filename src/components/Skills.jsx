import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio.js'
import './Skills.css'

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="toolkit" className="toolkit">
      <div className={`section-head reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">My <span className="it">toolkit.</span></h2>
        </div>
      </div>
      <div className="tool-grid">
        {skills.map(group => (
          <div key={group.label} className="tool-group">
            <h4>
              {group.label}
              <span className="tool-n">/{String(group.items.length).padStart(2, '0')}</span>
            </h4>
            <ul>
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
