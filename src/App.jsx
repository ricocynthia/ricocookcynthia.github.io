import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HawaiianAcquisition from './pages/caseStudies/studies/HawaiianAcquisition/HawaiianAcquisition'
import SDCEligibility from './pages/caseStudies/studies/SDCEligibility/SDCEligibility'
import AgentAssist from './pages/caseStudies/studies/AgentAssist/AgentAssist'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
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
        <Route path="/case-studies/agent-assist" element={<AgentAssist />} />
      </Routes>
    </BrowserRouter>
  )
}
