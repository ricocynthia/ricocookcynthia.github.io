import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Published from './components/Published'
import Skills from './components/Skills'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HawaiianAcquisition from './pages/caseStudies/studies/HawaiianAcquisition/HawaiianAcquisition'
import SDCEligibility from './pages/caseStudies/studies/SDCEligibility/SDCEligibility'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// function Cursor() {
//   const cursorRef = useRef(null)
//   useEffect(() => {
//     const cursor = cursorRef.current
//     if (!cursor) return
//     let mx = 0, my = 0, cx = 0, cy = 0
//     const onMove = e => { mx = e.clientX; my = e.clientY }
//     window.addEventListener('mousemove', onMove)
//     let raf
//     const tick = () => {
//       cx += (mx - cx) * .18
//       cy += (my - cy) * .18
//       cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`
//       raf = requestAnimationFrame(tick)
//     }
//     tick()
//     const targets = document.querySelectorAll('a, button, .spec-card, .case-card, [data-exp]')
//     const add = () => cursor.classList.add('big')
//     const rem = () => cursor.classList.remove('big')
//     targets.forEach(el => { el.addEventListener('mouseenter', add); el.addEventListener('mouseleave', rem) })
//     return () => {
//       window.removeEventListener('mousemove', onMove)
//       cancelAnimationFrame(raf)
//     }
//   }, [])
//   return <div className="cursor" ref={cursorRef} />
// }

function Home() {
  return (
    <>
      {/* <Cursor /> */}
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <Published />
      <Skills />
      <Beyond />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/hawaiian-acquisition" element={<HawaiianAcquisition />} />
        <Route path="/case-studies/sdc-eligibility" element={<SDCEligibility />} />
      </Routes>
    </BrowserRouter>
  )
}
