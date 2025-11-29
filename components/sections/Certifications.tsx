import styles from './Certifications.module.css'

export default function Certifications() {
  const certifications = [
    {
      title: 'ICPC ID',
      issuer: 'ICPC Foundation',
      description: 'International Collegiate Programming Contest Participant',
      link: 'https://icpc.global/ICPCID/O5VOX4CA0KRM',
      icon: '🏆',
      color: '#FF6B6B'
    },
    {
      title: 'Meta Hacker Cup 2023',
      issuer: 'Meta (Facebook)',
      description: 'Competitive Programming Contest Certificate',
      link: 'https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1071359040694040',
      icon: '💼',
      color: '#4ECDC4'
    },
    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      description: 'Certified in Intermediate Problem Solving Skills',
      link: 'https://www.hackerrank.com/certificates/61fa6a607ada',
      icon: '🎯',
      color: '#95E1D3'
    }
  ]

  return (
    <section className={styles.certifications}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <p className={styles.sectionSubtitle}>
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.certIcon} style={{ background: cert.color }}>
                <span className={styles.iconEmoji}>{cert.icon}</span>
              </div>
              <div className={styles.certContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDescription}>{cert.description}</p>
              </div>
              <div className={styles.certArrow}>
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
