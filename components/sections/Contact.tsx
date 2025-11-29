import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="section-title">
          <h2>
            <span style={{ color: '#173b6c', fontWeight: 'bold' }}>Contact</span>
          </h2>
        </div>

        <div className={styles.contactContent} data-aos="fade-in">
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>sajidabdullah729@gmail</p>
            </div>

            <div className={styles.infoItem}>
              <i className="bi bi-github"></i>
              <h4>Github:</h4>
              <a href="https://github.com/SajidAbdullah729" target="_blank" rel="noopener noreferrer">
                <p>sajidabdullah729</p>
              </a>
            </div>

            <div className={styles.infoItem}>
              <i className="bi bi-linkedin"></i>
              <h4>LinkedIn:</h4>
              <a
                href="https://linkedin.com/in/mohammad-abdullah-al-sajid-chowdhury-software-engineer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Mohammad Abdullah-Al-Sajid Chowdhury</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

