import './Nav.css'

export default function Nav() {
  return (
    <header className="bar">
      <span className="bar-mark">Cynthia Rico Cook</span>
      <nav className="bar-nav">
        <a href="#about">About</a>
        <a href="#work">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#case">Case studies</a>
        <a href="#published">Book</a>
        <a href="#contact">Contact</a>
      </nav>
      <span className="bar-status">
        <span className="bar-dot" />
        Open · Remote
      </span>
    </header>
  )
}
