import { useInView } from '../hooks/useInView'
import tettegoucheWaterfall from '../assets/tettegouche-waterfall.jpg'
import oaks from '../assets/oaks.jpg'
import birdFeather from '../assets/bird-feather.jpg'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="about">
      <div className={`section-head reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Engineer with a deep <span className="it">why</span> habit.</h2>
        </div>
      </div>

      <div className="about-grid reveal in">
        <div className="about-photo">
          <img
            src={birdFeather}
            alt="A hand holding a large black and white bird feather in the middle of a forest."
          />
        </div>
        <div className="about-body">
          <p>I'm a senior full-stack engineer who gets genuinely excited about <strong>complex business rules</strong>. The kind of work where you have to read the actual FAA policy documents before writing a single line of code — that's my kind of challenge.</p>
          <p>At Alaska Airlines, I've gone deep into how the airline industry actually works: native Sabre, regulatory requirements, and check-in experiences that move <strong>hundreds of thousands of travelers every day</strong>. I led the technical work for Alaska's acquisition of Hawaiian Airlines, built group reservation check-in from scratch, and designed the international document verification system.</p>
          <p>Before Alaska, I built full-stack e-commerce tools at Four51 (acquired by Sitecore in 2021) — hired full-time after an internship. CS at Augsburg University, right here in Minneapolis.</p>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-l">⌗ Now</div>
              <div className="about-card-v">Senior SWE · Alaska Airlines</div>
            </div>
            <div className="about-card">
              <div className="about-card-l">⌗ Based</div>
              <div className="about-card-v">Minneapolis, MN — remote only</div>
            </div>
            <div className="about-card">
              <div className="about-card-l">⌗ Also</div>
              <div className="about-card-v">Certified Health Coach</div>
            </div>
            <div className="about-card">
              <div className="about-card-l">⌗ Off-screen</div>
              <div className="about-card-v">Foraging · garden · herbal teas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
