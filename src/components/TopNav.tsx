import { useState } from 'react'
import styles from './TopNav.module.css'

type Section = 'hero' | 'about' | 'experience' | 'competitive-programming' | 'portfolio' | 'skills'

interface TopNavProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

const navItems: { section: Section; icon: string; label: string }[] = [
  { section: 'hero', icon: 'bx-home', label: 'Home' },
  { section: 'about', icon: 'bx-user', label: 'About' },
  { section: 'experience', icon: 'bx-briefcase', label: 'Experience' },
  { section: 'competitive-programming', icon: 'bx-trophy', label: 'Competitive' },
  { section: 'portfolio', icon: 'bx-book-content', label: 'Projects' },
  { section: 'skills', icon: 'bx-code-alt', label: 'Skills' },
]

export default function TopNav({ activeSection, onSectionChange }: TopNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (section: Section) => {
    onSectionChange(section)
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img
            src="/assets/img/image2.jpg"
            alt="Abdullah-Al-Sajid"
            className={styles.profileImg}
          />
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('hero')
            }}
            className={styles.name}
          >
            Abdullah-Al-Sajid
          </a>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.section}>
                <a
                  href={`#${item.section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.section)
                  }}
                  className={`${styles.navLink} ${activeSection === item.section ? styles.active : ''}`}
                >
                  <i className={`bx ${item.icon}`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/SajidAbdullah729"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/mohammad-abdullah-al-sajid-chowdhury-software-engineer/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>
    </header>
  )
}
