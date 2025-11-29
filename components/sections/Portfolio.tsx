'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 'carmania',
    title: 'Car Mania',
    category: 'filter-card',
    image: '/assets/projects/carmania/1.png',
    detailPath: '/projects/carmania',
  },
  {
    id: 'medimart',
    title: 'Medimart',
    category: 'filter-app',
    image: '/assets/projects/medimart/1.png',
    detailPath: '/projects/medimart',
  },
  {
    id: 'nextgen',
    title: 'NextGen Hospital Management Hub',
    category: 'filter-app',
    image: '/assets/projects/nextgen/1.png',
    detailPath: '/projects/nextgen',
  },
  {
    id: 'alaska',
    title: 'AlaskaExpress',
    category: 'filter-app',
    image: '/assets/projects/alaska/1.png',
    detailPath: '/projects/alaska',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')

  const filters = [
    { key: '*', label: 'All' },
    { key: '.filter-app', label: 'App' },
    { key: '.filter-card', label: 'Game' },
  ]

  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className={`${styles.portfolio} section-bg`}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="section-title">
          <h2>
            <span style={{ color: '#173b6c', fontWeight: 'bold' }}>Academic Projects</span>
          </h2>
        </div>

        <div className={styles.filters} data-aos="fade-up">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`${styles.filterBtn} ${activeFilter === filter.key ? styles.active : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.portfolioGrid} data-aos="fade-up" data-aos-delay="100">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`${styles.portfolioItem} ${project.category}`}>
              <div className={styles.portfolioWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.portfolioImage}
                />
                <div className={styles.portfolioLinks}>
                  <Link href={project.detailPath} className={styles.portfolioLink}>
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

