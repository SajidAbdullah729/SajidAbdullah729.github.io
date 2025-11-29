import styles from './About.module.css'

export default function About() {
  const skillTags = [
    { name: 'Full-Stack Development', color: '#4CAF50' },
    { name: 'TypeScript', color: '#007acc' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#f7df1e', textColor: 'black' },
    { name: 'Generative AI', color: '#ff5733' },
    { name: 'Next.js', color: '#000000' },
    { name: 'React', color: '#61dafb', textColor: 'black' },
    { name: 'Flask', color: '#003545' },
    { name: 'Django', color: '#092e20' },
    { name: 'REST API', color: '#f06529' },
    { name: 'AWS', color: '#232f3e' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Git', color: '#f34f29' },
    { name: 'Drizzle ORM', color: '#ff6f61' },
    { name: 'Node.js', color: '#005f73' },
  ]

  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Finalist at ACM ICPC Asia-West Continent. Selected for national rounds of Mathematical and Informatics Olympiads'
    },
    {
      icon: '💼',
      title: 'Current Role',
      description: 'Software Engineer at Pioneer Alpha, specializing in full-stack development and modern web technologies'
    },
    {
      icon: '🚀',
      title: 'Interests',
      description: 'Artificial Intelligence, Software Engineering Fundamentals, and Competitive Programming'
    }
  ]

  return (
    <section className={styles.about}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            Passionate Software Engineer with a strong foundation in computer science and a track record of excellence in competitive programming and software development.
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageSection} data-aos="fade-right">
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder}></div>
              <img
                src="/assets/img/image.jpg"
                alt="Abdullah-Al-Sajid"
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.imageInfo}>
              <h3 className={styles.roleTitle}>Software Engineer</h3>
              <div className={styles.organization}>
                <span className={styles.orgLabel}>Organization:</span>
                <a href="https://pioneeralpha.com/" className={styles.orgLink} target="_blank" rel="noopener noreferrer">
                  Pioneer Alpha
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contentSection} data-aos="fade-left">
            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>Core Technologies</h3>
              <div className={styles.skillsGrid}>
                {skillTags.map((skill) => (
                  <span
                    key={skill.name}
                    className={styles.skillTag}
                    style={{
                      backgroundColor: skill.color,
                      color: skill.textColor || 'white',
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.bioSection}>
              <p className={styles.bioText}>
                I am a dedicated software engineer with a passion for solving complex problems and building innovative solutions. 
                My journey in computer science has been marked by excellence in competitive programming, where I've represented 
                my university in several national and international contests.
              </p>
              <p className={styles.bioText}>
                Beyond coding, I actively contribute to the programming community by judging, organizing, and testing 
                various programming contests. My experience spans from machine learning research to full-stack web development, 
                always staying current with the latest technologies and best practices.
              </p>
            </div>

            <div className={styles.contactSection}>
              <h3 className={styles.contactTitle}>Get In Touch</h3>
              <p className={styles.contactSubtitle}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className={styles.contactGrid}>
                <a 
                  href="mailto:sajidabdullah729@gmail.com" 
                  className={styles.contactCard}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className={styles.contactIcon}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h4 className={styles.contactLabel}>Email</h4>
                  <p className={styles.contactValue}>sajidabdullah729@gmail.com</p>
                </a>

                <a 
                  href="https://github.com/SajidAbdullah729" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className={styles.contactIcon}>
                    <i className="bi bi-github"></i>
                  </div>
                  <h4 className={styles.contactLabel}>GitHub</h4>
                  <p className={styles.contactValue}>SajidAbdullah729</p>
                </a>

                <a 
                  href="https://linkedin.com/in/mohammad-abdullah-al-sajid-chowdhury-software-engineer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={styles.contactIcon}>
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <h4 className={styles.contactLabel}>LinkedIn</h4>
                  <p className={styles.contactValue}>Mohammad Abdullah-Al-Sajid</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
