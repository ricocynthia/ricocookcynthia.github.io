import './Beyond.css'

export default function Beyond() {
  return (
    <section className="beyond-section">
      <div className="beyond-body">
        <p className="section-label">Beyond the keyboard</p>
        <h2 className="section-title">Rooted in the <em>natural world.</em></h2>
        <p>Software isn't the only complex system I find beautiful. I'm a <strong>certified Integrative Nutrition Health Coach</strong> with a deep love for natural living. I forage for wild plants and mushrooms in Minnesota, grow my own garden, and blend my own herbal and mushroom teas and tinctures.</p>
        <p>The same curiosity that drives me to read FAA policy documents before writing a line of code drives me to study field guides before I take anything from the forest. In both worlds, <strong>the details matter</strong>.</p>
        <p>Someday I'd love to turn that passion into a wellness brand. For now I'm just enjoying the journey — and building the tools to share what I know.</p>
      </div>
      <div>
        <div className="book-card">
          <div className="book-spine">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22 Q8 18 6 14 Q4 10 6 6 Q8 3 12 2 Q16 3 18 6 Q20 10 18 14 Q16 18 12 22Z" fill="rgba(255,255,255,0.25)"/>
              <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.4)"/>
            </svg>
          </div>
          <div>
            <div className="book-info-label">Published work</div>
            <div className="book-title">Nature's Cookbook — Acknowledging The Gifts of Nature Through Cooking, Gardening &amp; Healing</div>
            <p className="book-desc">Co-authored as part of CEED's educational curriculum. The research behind this book became the foundation for Forage &amp; Heal.</p>
            <a href="https://ceed.org/resource/natures-cookbook/#_" className="project-link" style={{ fontSize: '12px', marginTop: '0.75rem', display: 'inline-block' }} target="_blank" rel="noopener noreferrer">Read it →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
