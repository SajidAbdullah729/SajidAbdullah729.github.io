import { useState, useEffect } from 'react'
import TopNav from './components/TopNav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import EducationExperience from './components/sections/EducationExperience'
import CompetitiveProgramming from './components/sections/CompetitiveProgramming'
import Portfolio from './components/sections/Portfolio'
import Skills from './components/sections/Skills'
import BackToTop from './components/BackToTop'
import AOSInit from './components/AOSInit'

type Section = 'hero' | 'about' | 'experience' | 'competitive-programming' | 'portfolio' | 'skills'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('hero')

  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    }
    initAOS()

    // Handle hash changes for GitHub Pages compatibility
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'hero'
      const validSections: Section[] = ['hero', 'about', 'experience', 'competitive-programming', 'portfolio', 'skills']
      if (validSections.includes(hash as Section)) {
        setActiveSection(hash as Section)
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    // Update URL hash without causing page reload
    window.history.pushState(null, '', `#${section}`)
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AOSInit />
      <TopNav activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <div className={`content-section ${activeSection === 'hero' ? 'active' : ''}`}>
          <Hero />
        </div>
        <div className={`content-section ${activeSection === 'about' ? 'active' : ''}`}>
          <About />
        </div>
        <div className={`content-section ${activeSection === 'experience' ? 'active' : ''}`}>
          <EducationExperience />
        </div>
        <div className={`content-section ${activeSection === 'competitive-programming' ? 'active' : ''}`}>
          <CompetitiveProgramming />
        </div>
        <div className={`content-section ${activeSection === 'portfolio' ? 'active' : ''}`}>
          <Portfolio />
        </div>
        <div className={`content-section ${activeSection === 'skills' ? 'active' : ''}`}>
          <Skills />
        </div>
      </main>
      <BackToTop onSectionChange={handleSectionChange} />
    </>
  )
}

export default App

