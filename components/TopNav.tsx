'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styles from './TopNav.module.css'

const navItems = [
  { href: '/', icon: 'bx-home', label: 'Home' },
  { href: '/about', icon: 'bx-user', label: 'About' },
  { href: '/experience', icon: 'bx-briefcase', label: 'Experience' },
  { href: '/competitive-programming', icon: 'bx-trophy', label: 'Competitive' },
  { href: '/portfolio', icon: 'bx-book-content', label: 'Projects' },
  { href: '/skills', icon: 'bx-code-alt', label: 'Skills' },
]

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image
            src="/assets/img/image2.jpg"
            alt="Abdullah-Al-Sajid"
            width={50}
            height={50}
            className={styles.profileImg}
          />
          <Link href="/" className={styles.name}>
            Abdullah-Al-Sajid
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  <i className={`bx ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socialLinks}>
          <a href="https://github.com/SajidAbdullah729" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/mohammad-abdullah-al-sajid-chowdhury-software-engineer/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
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

