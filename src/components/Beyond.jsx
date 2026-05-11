import dandelionHarvest from '../assets/dandelion-harvest.jpg'
import naturesCookbook from '../assets/natures-cookbook.jpg'
import './Beyond.css'

export default function Beyond() {
  return (
    <section className="beyond">
      <div className="beyond-img">
        <img
          src={dandelionHarvest}
          alt="Dandelion leaves and roots harvested from the wild, laid out in a sink to be washed"
        />
      </div>
      <div className="beyond-text">
        <p className="eyebrow beyond-eyebrow">Beyond the keyboard</p>
        <h2 className="section-title beyond-title">Rooted in the <span className="it beyond-it">natural world.</span></h2>
        <p>Software isn't the only complex system I find beautiful. I'm a <strong>certified Integrative Nutrition Health Coach</strong> with a deep love for natural living. I forage for wild plants and mushrooms in Minnesota, grow my own garden, and blend my own herbal and mushroom teas and tinctures.</p>
        <p>The same curiosity that drives me to read FAA policy documents drives me to study field guides before I take anything from the forest. <strong>The details matter</strong>, in both worlds.</p>

        <a
          className="book-card"
          href="https://ceed.org/resource/natures-cookbook/#_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="book-cover">
            <img src={naturesCookbook} alt="Nature's Cookbook cover" />
          </div>
          <div className="book-info">
            <div className="book-label">Published work · CEED · 2023</div>
            <div className="book-title">Nature's Cookbook</div>
            <p className="book-desc">Co-authored as part of CEED's educational curriculum. The research behind this book became the foundation for Forage &amp; Heal.</p>
            <span className="book-link">Read it ↗</span>
          </div>
        </a>
      </div>
    </section>
  )
}
