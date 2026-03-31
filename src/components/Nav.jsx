import { useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="nav">
        <span className="nav-name">Cynthia Rico Cook</span>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`nav-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        <a href="#about" onClick={close}>About</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#contact" onClick={close}>Contact</a>
      </div>

      {/* Backdrop */}
      {open && <div className="nav-backdrop" onClick={close} />}
    </>
  )
}