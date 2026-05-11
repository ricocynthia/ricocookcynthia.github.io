import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`bar${open ? ' bar--open' : ''}`}>
        <span className="bar-mark">Cynthia Rico Cook</span>

        <nav className="bar-nav">
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#case">Case studies</a>
          <a href="#contact">Contact</a>
        </nav>

        <span className="bar-status">
          <span className="bar-dot" />
          Open · Remote
        </span>

        <button
          className="bar-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </header>

      {open && (
        <div className="bar-mobile-menu" onClick={close}>
          <a href="#about" onClick={close}>About</a>
          <a href="#work" onClick={close}>Experience</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#case" onClick={close}>Case studies</a>
          <a href="#contact" onClick={close}>Contact</a>
        </div>
      )}
    </>
  )
}
