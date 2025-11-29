import { useState, useEffect } from 'react'
import styles from './BackToTop.module.css'

type Section = 'hero' | 'about' | 'experience' | 'competitive-programming' | 'portfolio' | 'skills'

interface BackToTopProps {
  onSectionChange: (section: Section) => void
}

export default function BackToTop({ onSectionChange }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    onSectionChange('hero')
  }

  return (
    <a
      href="#hero"
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
      className={`${styles.backToTop} ${isVisible ? styles.active : ''}`}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  )
}
