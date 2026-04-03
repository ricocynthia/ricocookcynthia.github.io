import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudies from './components/CaseStudies'
import HawaiianAcquisition from './pages/caseStudies/studies/HawaiianAcquisition'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/hawaiian-acquisition" element={<HawaiianAcquisition />} />
      </Routes>
    </BrowserRouter>
  )
}