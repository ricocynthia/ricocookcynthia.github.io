import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">
        <span className="hero-row"><span className="hero-word">A Senior</span></span>
        <span className="hero-row">
          <span className="hero-word">Software</span>
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
            src="/src/assets/chaga_heart.jpg"
            alt="Chaga mushroom in the shape of a heart, growing on a birch tree"
          />
        </div>
        <div className="hero-cta">
          <a href="#projects">Scroll to explore<span>↓</span></a>
        </div>
      </div>

      <div className="corner br">↓ Continue reading</div>
    </section>
  )
}
