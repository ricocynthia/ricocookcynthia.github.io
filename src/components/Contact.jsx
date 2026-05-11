import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView()
  return (
    <section id="contact" className="contact">
      <p className="eyebrow contact-eyebrow reveal in">Get in touch</p>
      <h2 className="contact-title reveal in">Let's <span className="it contact-it">talk.</span></h2>
      <p className={`contact-intro reveal ${inView ? 'in' : ''}`} ref={ref}>
        I'm open to senior engineering roles — especially teams building products with complex real-world business rules where the hard part isn't just the code, it's deeply understanding how the business actually works. <strong>Remote only.</strong>
      </p>
      <div className="contact-cta reveal in">
        <a href="mailto:ricocynthia5@gmail.com" className="btn-primary">
          <span>ricocynthia5@gmail.com</span>
          <span style={{ position: 'relative', zIndex: 1 }}>→</span>
        </a>
        <a href="https://linkedin.com/in/cynthia-rico-cook-a4b3aa148" className="btn-ghost" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
