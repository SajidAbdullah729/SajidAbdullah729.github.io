import styles from './EducationExperience.module.css'

export default function EducationExperience() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      period: '2019 - 2023',
      institution: 'Ahsanullah University of Science and Technology',
      details: 'CGPA: 3.316/4.000',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Certificate',
      period: '2016 - 2018',
      institution: 'Chittagong College',
      details: 'GPA: 5.00/5.00',
      icon: '📚'
    },
    {
      degree: 'Secondary School Certificate',
      period: '2014 - 2016',
      institution: 'Chittagong Collegiate School',
      details: 'GPA: 5.00/5.00',
      icon: '📖'
    }
  ]

  const experiences = [
    {
      title: 'Codeforces Contest Testing',
      role: 'Problem Tester',
      period: '2023',
      organization: 'Codeforces',
      description: 'Tested problems for Codeforces Round #957 (Div.3)',
      link: 'https://codeforces.com/blog/entry/131368',
      icon: '🔍'
    },
    {
      title: 'Programming Contest Organization',
      role: 'Problem Setter, Tester, Judge, Organizer',
      period: '2020 - 2023',
      organization: 'AUST CSE Society & AUST Programming Club',
      description: 'Organized and managed multiple programming contests for university students',
      link: 'https://toph.co/contests/training/rfbblek',
      icon: '🏆'
    },
    {
      title: 'Machine Learning Research',
      role: 'Thesis Research',
      period: '2023',
      organization: 'AUST',
      description: 'Conducted research on Machine Learning Models for thesis project',
      icon: '🤖'
    },
    {
      title: 'Project Development',
      role: 'Full-Stack Developer',
      period: '2020 - 2023',
      organization: 'Personal & Team Projects',
      description: 'Developed multiple notable projects during undergraduate studies',
      link: 'https://github.com/SajidAbdullah729?tab=repositories',
      icon: '💻'
    },
    {
      title: 'Mathematical Olympiad',
      role: 'National Round Participant',
      period: '2012, 2014',
      organization: 'Bangladesh Mathematical Olympiad',
      description: 'Selected for national round twice in junior group from Chittagong Regionals',
      icon: '🧮'
    }
  ]

  return (
    <section className={styles.resume}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Education & Experience</h2>
          <p className={styles.sectionSubtitle}>
            My academic journey and professional experiences that have shaped my career.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineColumn}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>🎓</div>
              <h3 className={styles.categoryTitle}>Education</h3>
            </div>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.markerIcon}>{edu.icon}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.timelineTitle}>{edu.degree}</h4>
                      <span className={styles.timelinePeriod}>{edu.period}</span>
                    </div>
                    <p className={styles.timelineInstitution}>{edu.institution}</p>
                    <p className={styles.timelineDetails}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.timelineColumn}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>💼</div>
              <h3 className={styles.categoryTitle}>Professional Experience</h3>
            </div>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.markerIcon}>{exp.icon}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.timelineTitle}>
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.timelineLink}>
                            {exp.title}
                          </a>
                        ) : (
                          exp.title
                        )}
                      </h4>
                      <span className={styles.timelinePeriod}>{exp.period}</span>
                    </div>
                    <p className={styles.timelineRole}>{exp.role} • {exp.organization}</p>
                    <p className={styles.timelineDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
