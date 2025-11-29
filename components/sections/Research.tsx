import styles from './Research.module.css'

export default function Research() {
  const research = {
    title: 'A Deep Neural Network Approach with Pioneering Local Dataset to Recognize Doctor\'s Handwritten Prescription in Bangladesh',
    publisher: 'IEEE',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10499631?fbclid=IwZXh0bgNhZW0CMTEAAR3ZXC6rHfQ7rEZL5sjPNp3peHdVRESks0yYTQHkqVhY0KUZEcVMTjnoW2o_aem_AXbkf-pvdmPmT1pKFD-vqCnKJ8wpYH8NT7TqwQZl4yWY9j-o-a6DGtDQHYhogJABIGvm00ux9CS8mP201Ccr9iCc',
    description: 'Research paper on using deep neural networks to recognize handwritten prescriptions in the context of Bangladesh healthcare system.',
    icon: '📄'
  }

  return (
    <section className={styles.research}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Research Publications</h2>
          <p className={styles.sectionSubtitle}>
            Academic research contributions and published papers in the field of computer science.
          </p>
        </div>

        <div className={styles.researchContainer}>
          <a
            href={research.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.researchCard}
            data-aos="fade-up"
          >
            <div className={styles.researchHeader}>
              <div className={styles.researchIcon}>
                <span className={styles.iconEmoji}>{research.icon}</span>
              </div>
              <div className={styles.researchBadge}>
                <span className={styles.badgeText}>{research.publisher}</span>
              </div>
            </div>
            <div className={styles.researchContent}>
              <h3 className={styles.researchTitle}>{research.title}</h3>
              <p className={styles.researchDescription}>{research.description}</p>
              <div className={styles.researchMeta}>
                <span className={styles.metaItem}>
                  <i className="bx bx-calendar"></i>
                  {research.year}
                </span>
                <span className={styles.metaItem}>
                  <i className="bx bx-book"></i>
                  {research.publisher}
                </span>
              </div>
            </div>
            <div className={styles.researchFooter}>
              <span className={styles.readMore}>
                Read Paper
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
