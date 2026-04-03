import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import './CaseStudyLayout.css'

export default function CaseStudyLayout({ title, subtitle, meta, children }) {
  const navigate = useNavigate()

  return (
    <div className="csl-page">
      <div className="csl-back-bar">
        <button className="csl-back" onClick={() => navigate('/')}>
          ← Back to portfolio
        </button>
      </div>

      <div className="csl-content">
        <p className="section-label">Case study</p>
        <h1 className="csl-title">{title}</h1>
        <p className="csl-subtitle">{subtitle}</p>

        <div className="csl-meta-row">
          {meta.map(item => (
            <div key={item.label} className="csl-meta-item">
              <span className="csl-meta-key">{item.label}</span>
              <span className="csl-meta-val">{item.value}</span>
            </div>
          ))}
        </div>

        <hr className="csl-divider" />

        {children}
      </div>

      <Footer />
    </div>
  )
}