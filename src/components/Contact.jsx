import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's <em>talk.</em></h2>
      <p className="contact-intro">
        I'm open to senior engineering roles — especially teams building products with complex
        real-world business rules where the hard part isn't just the code, it's deeply understanding
        how the business actually works. Remote only.
      </p>
      <div className="contact-links">
        <a href="mailto:ricocynthia5@gmail.com" className="btn-primary">Email me</a>
        <a href="https://linkedin.com/in/cynthia-rico-cook-a4b3aa148" className="btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
