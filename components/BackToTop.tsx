'use client'

import { useState, useEffect } from 'react'
import styles from './BackToTop.module.css'

export default function BackToTop() {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.active : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  )
}

