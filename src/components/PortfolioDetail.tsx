'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './PortfolioDetail.module.css'

interface PortfolioDetailProps {
  project: {
    title: string
    images: string[]
    language: string
    tools: string
    projectUrl: string
    description: string
  }
}

export default function PortfolioDetail({ project }: PortfolioDetailProps) {

  return (
    <>
      <section className={styles.breadcrumbs}>
        <div className="container">
          <div className={styles.breadcrumbContent}>
            <h2>Portfolio Details</h2>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.portfolioDetails}>
        <div className="container">
          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioSlider}>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className={styles.swiper}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className={styles.slideImage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.portfolioInfo}>
              <div className={styles.infoBox}>
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Language</strong>: {project.language}
                  </li>
                  <li>
                    <strong>Tools</strong>: {project.tools}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      {project.projectUrl}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.descriptionBox}>
                <h2>Short Description</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

