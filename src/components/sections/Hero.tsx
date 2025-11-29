import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      import('typed.js').then((Typed) => {
        const typed = new Typed.default(typedRef.current!, {
          strings: ['Software Engineer'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        })

        return () => {
          typed.destroy()
        }
      })
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1>Abdullah-Al-Sajid</h1>
        <p>
          I&apos;m a <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  )
}

