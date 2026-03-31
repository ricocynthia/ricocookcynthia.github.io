import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-body">
        <p className="section-label">About me</p>
        <h2 className="section-title">Engineer. Builder.<br /><em>Always asking why.</em></h2>
        <p>I'm a senior full-stack engineer who gets genuinely excited about <strong>complex business rules</strong>. The kind of work where you have to read the actual FAA policy documents before you can write a single line of code — that's my kind of challenge.</p>
        <p>At Alaska Airlines, I've gone deep into how the airline industry actually works: booking and managing reservations in native Sabre, the regulatory requirements airlines must follow, and building check-in experiences that move <strong>hundreds of thousands of travelers every day</strong>. I led the technical work for Alaska's acquisition of Hawaiian Airlines, built group reservation check-in from scratch, and designed the international document verification system that took real pressure off airport staff.</p>
        <p>Before Alaska, I built full-stack e-commerce tools at Four51 (acquired by Sitecore in 2021) — where I was hired full-time after an internship. I studied Computer Science at Augsburg University right here in Minneapolis.</p>
        <p>What keeps me in this work? The fact that <strong>what I build is constantly in use</strong>, making real travel smoother for real people. That accountability pushes me to care deeply about quality.</p>
      </div>
      <div className="about-aside">
        <div className="about-card">
          <div className="about-card-label">Currently at</div>
          <div className="about-card-val">Alaska Airlines — Senior Software Engineer</div>
        </div>
        <div className="about-card">
          <div className="about-card-label">Based in</div>
          <div className="about-card-val">Minneapolis, MN — open to remote only</div>
        </div>
        <div className="about-card">
          <div className="about-card-label">What I value</div>
          <div className="about-card-val about-card-list">
            End-to-end ownership<br />
            Clear technical communication<br />
            Mentorship &amp; team growth<br />
            Translating product ↔ engineering
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-label">Beyond the keyboard</div>
          <div className="about-card-val about-card-list">
            Foraging wild plants &amp; mushrooms in Minnesota. Growing my own garden. Blending herbal teas and tinctures. Certified Integrative Nutrition Health Coach.
          </div>
        </div>
      </div>
    </section>
  )
}
