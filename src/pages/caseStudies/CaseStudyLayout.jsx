import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './CaseStudyLayout.css'

export default function CaseStudyLayout({
  number, eyebrow, titleLines, subtitle, meta, nextStudy, children
}) {
  const navigate = useNavigate()
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight)
      if (barRef.current) barRef.current.style.width = `${pct * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [children])

  return (
    <div className="cs-page">
      <div ref={barRef} className="cs-read-bar" />

      <header className="cs-bar">
        <button className="cs-bar-back" onClick={() => navigate('/')}>
          <span className="cs-arr">←</span> Work
        </button>
        <button className="cs-bar-mark" onClick={() => navigate('/')}>CRC</button>
        <nav className="cs-bar-nav">
          <Link to="/#about">About</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-grid">
          <div>
            <p className="cs-eyebrow">{eyebrow}</p>
            <h1 className="cs-title">
              {titleLines.map((line, i) => (
                <span key={i} className="cs-title-row">
                  <span className={`cs-title-word${line.italic ? ' it' : ''}`}>
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>
            <p className="cs-subtitle">{subtitle}</p>
          </div>
          <div className="cs-hero-aside">
            <div className="cs-hero-num">{number}</div>
          </div>
        </div>
      </section>

      <div className="cs-meta-strip">
        <div className="cs-meta-grid">
          {meta.map(item => (
            <div key={item.key} className="cs-meta-item">
              <span className="cs-meta-key">{item.key}</span>
              <span className="cs-meta-val">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      <article className="cs-body-wrap">
        {children}
      </article>

      {nextStudy && (
        <Link to={nextStudy.href} className="cs-next">
          <div className="cs-next-grid">
            <div>
              <p className="cs-next-l">{nextStudy.label}</p>
              <h3 dangerouslySetInnerHTML={{ __html: nextStudy.title }} />
              <span className="cs-next-cta">Read case study →</span>
            </div>
            <div className="cs-next-num">{nextStudy.num}</div>
          </div>
        </Link>
      )}
    </div>
  )
}
