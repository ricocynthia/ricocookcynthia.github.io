import { useInView } from '../hooks/useInView'
import './Published.css'

export default function Published() {
  const [ref, inView] = useInView()
  return (
    <section id="published" className="published">
      <div className={`section-head reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div>
          <p className="eyebrow">Published work</p>
          <h2 className="section-title">A book I co-<span className="it">authored.</span></h2>
        </div>
      </div>

      <a
        className="pub-card reveal in"
        href="https://ceed.org/resource/natures-cookbook/#_"
        target="_blank"
        rel="noopener"
      >
        <div className="pub-cover">
          <div className="pub-spine" />
          <div className="pub-front">
            <span className="pub-front-l">A Field Guide</span>
            <span className="pub-front-t"><em>Nature's</em><br />Cookbook</span>
            <span className="pub-front-d">CEED · 2023</span>
          </div>
        </div>
        <div className="pub-body">
          <p className="pub-l">CEED Educational Curriculum · 2023</p>
          <h3 className="pub-t">
            Nature's Cookbook —<br />
            <span className="pub-t-it">Acknowledging the gifts of nature through cooking, gardening &amp; healing.</span>
          </h3>
          <p className="pub-d">
            Co-authored as part of CEED's educational curriculum. The research behind this book — Indigenous foodways, herbal medicine, and the ethics of foraging in Minnesota's wild places — became the foundation for <strong>Forage &amp; Heal</strong>.
          </p>
          <span className="pub-cta">Read it<span>↗</span></span>
        </div>
      </a>
    </section>
  )
}
