import './Hero.css'

function Globe() {
  return (
    <span className="hero-glyph">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#1F2D24" strokeWidth="1.2"/>
        <path d="M12 3 Q4 12 12 21 Q20 12 12 3" fill="none" stroke="#1F2D24" strokeWidth="1.2"/>
        <path d="M3 12 Q12 4 21 12 Q12 20 3 12" fill="none" stroke="#1F2D24" strokeWidth="1.2"/>
      </svg>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      {/* corner labels */}
      <div className="corner tl"><span className="corner-glyph">✦</span><span>CRC · 2026</span></div>
      <div className="corner tr">Field journal · entry 042</div>

      <h1 className="hero-name">
        <span className="hero-row"><span className="hero-word">A&nbsp;Senior</span></span>
        <span className="hero-row">
          <span className="hero-word">Software</span>
          <Globe />
        </span>
        <span className="hero-row"><span className="hero-word hero-it">Engineer,</span></span>
        <span className="hero-row">
          <span className="hero-word hero-quiet">forager,</span>
          <span className="hero-word">builder.</span>
        </span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-meta">
          <b>Cynthia Rico Cook</b> here. I build the products people use every day — from check-in flows for <b>Alaska Airlines</b> to apps rooted in the gifts of the natural world.
        </p>
        <div className="hero-photo">
          <span className="hero-photo-badge">Minneapolis, MN · 2026</span>
          <img
            src="https://images.unsplash.com/photo-1516048015710-7a3b4c86be44?auto=format&fit=crop&w=800&q=80"
            alt="Hands holding fresh herbs"
          />
        </div>
        <div className="hero-cta">
          <a href="#projects">Scroll to explore<span>↓</span></a>
        </div>
      </div>

      <div className="corner bl">N 44.97° · W 93.26°</div>
      <div className="corner br">↓ Continue reading</div>
    </section>
  )
}
