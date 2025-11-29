'use client'

import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', value: 90, icon: '⚡' },
      { name: 'C', value: 90, icon: '⚡' },
      { name: 'JavaScript', value: 80, icon: '📜' },
      { name: 'TypeScript', value: 80, icon: '📘' },
      { name: 'Python', value: 65, icon: '🐍' },
      { name: 'Java', value: 70, icon: '☕' },
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'Next.js', value: 60, icon: '▲' },
      { name: 'React', value: 50, icon: '⚛️' },
      { name: 'HTML/CSS/Bootstrap', value: 65, icon: '🎨' },
      { name: 'ASP.NET MVC', value: 60, icon: '🔷' },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', value: 50, icon: '🟢' },
      { name: 'Django', value: 50, icon: '🎸' },
      { name: 'Flask', value: 50, icon: '🍾' },
      { name: 'PostgreSQL', value: 70, icon: '🐘' },
      { name: 'Oracle PL/SQL', value: 80, icon: '🗄️' },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Data Structures & Algorithms', value: 95, icon: '🧮' },
      { name: 'Git', value: 50, icon: '🔀' },
      { name: 'AWS', value: 50, icon: '☁️' },
      { name: 'Generative AI', value: 60, icon: '🤖' },
    ]
  }
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll<HTMLElement>('[data-value]')
            progressBars.forEach((bar) => {
              const value = bar.getAttribute('data-value')
              if (value) {
                setTimeout(() => {
                  bar.style.width = `${value}%`
                }, 100)
              }
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section className={styles.skills}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionSubtitle}>
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </div>

        <div className={styles.skillsGrid} ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className={styles.skillCategory} data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.title.split(' ')[0][0]}</span>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.value}%</span>
                    </div>
                    <div className={styles.progressBarWrap}>
                      <div
                        className={styles.progressBar}
                        data-value={skill.value}
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: '0%' }}
                      >
                        <span className={styles.progressGlow}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
