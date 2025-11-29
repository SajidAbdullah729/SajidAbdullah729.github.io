import styles from './ResumeSection.module.css'

export default function ResumeSection() {
  return (
    <section className={styles.resumeSection}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <div className={styles.iconWrapper}>
            <i className="bx bx-file-blank"></i>
          </div>
          <h2 className={styles.sectionTitle}>Resume</h2>
          <p className={styles.sectionSubtitle}>
            Download my complete resume to view my detailed professional background, skills, and achievements.
          </p>
        </div>
        <div className={styles.resumeCard}>
          <div className={styles.resumeIcon}>
            <i className="bx bx-file-pdf"></i>
          </div>
          <div className={styles.resumeInfo}>
            <h3>Abdullah-Al-Sajid - Resume</h3>
            <p>Software Engineer | Full-Stack Developer</p>
            <span className={styles.resumeDate}>Last Updated: 2024</span>
          </div>
          <a
            href="https://drive.google.com/file/d/1nImcSui94ymyFG0E5P0Q76W5KqKYfKSB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            <i className="bx bx-download"></i>
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  )
}
