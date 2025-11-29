import styles from './CompetitiveProgramming.module.css'

interface ContestItem {
  name: string
  rank?: string
  team?: string
  country?: string
  link: string
  highlight?: boolean
}

export default function CompetitiveProgramming() {
  const platforms = [
    { name: 'Codeforces', handle: 'SajidAbdullah', rating: '1613', title: 'Expert', link: 'https://codeforces.com/profile/SajidAbdullah', color: '#1F8ACB' },
    { name: 'CodeChef', handle: 'lawliet11235', rating: '1886', title: '4 Star', link: 'https://www.codechef.com/users/lawliet11235', color: '#5B4638' },
    { name: 'HackerRank', handle: 'sajidabdullah729', link: 'https://www.hackerrank.com/profile/sajidabdullah729', color: '#2EC866' },
    { name: 'StopStalk', handle: 'SajidAbdullah', link: 'https://www.stopstalk.com/user/profile/SajidAbdullah', color: '#FF6B6B' },
    { name: 'LightOJ', handle: 'sajidabdullah', link: 'https://lightoj.com/user/sajidabdullah', color: '#4A90E2' },
    { name: 'Toph', handle: 'SajidAbdullah', link: 'https://toph.co/u/SajidAbdullah', color: '#FF9800' },
    { name: 'Virtual Judge', handle: 'Lawliet112358', link: 'https://vjudge.net/user/Lawliet112358', color: '#9C27B0' },
    { name: 'CSES', handle: 'SajidAbdullah', link: 'https://cses.fi/user/54375', color: '#00BCD4' },
  ]

  const contests: Array<{
    category: string
    icon: string
    items: ContestItem[]
  }> = [
    {
      category: 'ICPC Contests',
      icon: '🌍',
      items: [
        { name: 'ACM-ICPC Asia-West Continent Final 2022', rank: '51', team: 'AUST_CrackPlatoon', link: 'https://icpc.global/regionals/finder/ICPCKolkataKanpur-2023/standings', highlight: true },
        { name: 'ACM-ICPC Dhaka Regional Contest 2022', rank: '28', team: 'AUST_CrackPlatoon', link: 'https://web.archive.org/web/20230531214941/https://algo.codemarshal.org/contests/dhaka-22/standings', highlight: true },
        { name: 'ACM-ICPC Dhaka Regional Contest 2023', rank: '54', team: 'AUST_Shunno7', link: 'https://icpc.global/regionals/finder/Dhaka-2024/standings', highlight: true },
        { name: 'ACM-ICPC Dhaka Regional Preliminary 2023', rank: '47', team: 'AUST_Shunno7', link: 'https://icpc.global/regionals/finder/Dhaka-Preliminary-2024/standings' },
        { name: 'ACM-ICPC Dhaka Regional Preliminary 2022', rank: '61', team: 'AUST_CrackPlatoon', link: 'https://web.archive.org/web/20230327143027/https://algo.codemarshal.org/contests/icpc-dhaka-22-preli/standings' },
        { name: 'ACM-ICPC Dhaka Regional Preliminary 2021', rank: '72', team: 'AUST_SillyMistakes', link: 'https://web.archive.org/web/20230531230959/https://algo.codemarshal.org/contests/icpc-dhaka-21-preli/standings' },
      ]
    },
    {
      category: 'National Contests',
      icon: '🏆',
      items: [
        { name: 'IUT Inter University Programming Contest 2024', rank: '14', team: 'AUST_RedX', link: 'https://toph.co/c/iut-11th-national-ict-fest-2024/standings', highlight: true },
        { name: 'Bangladesh Informatics Olympiad 2014 National Round', rank: '11', team: 'Junior Group', link: 'https://algo.codemarshal.org/contests/bio-nr-2014-j/standings', highlight: true },
        { name: 'NCPC JU 2023 Preliminary', rank: '11', team: 'AUST_RedX', link: 'https://bapsoj.org/contests/ncpc-preliminary-ju-2023/standings', highlight: true },
        { name: 'CUET Inter University Programming Contest 2024', rank: '36', team: 'AUST_Shunno7', link: 'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings' },
        { name: 'NCPC JU 2023', rank: '38', team: 'AUST_RedX', link: 'https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings' },
        { name: 'AUST Inter University Programming Contest 2022', rank: '53', team: 'AUST_SLYTHERIN', link: 'https://web.archive.org/web/20221201173754/https://algo.codemarshal.org/contests/aust-2022/standings' },
        { name: 'BUET Inter University Programming Contest 2022', team: 'AUST_SillyMistakes', link: 'https://toph.co/c/buet-inter-university-2022/standings' },
        { name: 'BUET Inter University Programming Contest 2023', team: 'AUST_Badamtola', link: 'https://toph.co/c/buet-inter-university-2023/standings' },
        { name: 'SUST Inter University Programming Contest 2024', team: 'AUST_Shunno7', link: 'https://toph.co/c/inter-university-sust-cse-carnival-2024/standings' },
      ]
    },
    {
      category: 'Intra University Contests',
      icon: '🎯',
      items: [
        { name: 'Intra AUST Programming Contest (CodeCombat 1.0)', rank: '1st', team: 'AUST_CrackPlatoon', link: 'https://toph.co/contests/training/g2jtqtr/standings', highlight: true },
        { name: 'Intra AUST Programming Contest - Spring 2021', rank: '2nd', team: 'Individual', link: 'https://toph.co/contests/training/6p8qhfa/standings' },
        { name: 'Intra AUST Programming Contest (Cefalo Codefiesta)', rank: '3rd', team: 'AUST_DA_VIN_C_CODE', link: 'https://toph.co/contests/training/ah224ff/standings' },
        { name: 'Intra AUST Programming Contest Fall 2021 (CodeClash21)', rank: '4th', team: 'AUST_BITWISE', link: 'https://toph.co/contests/training/wph37wb/standings' },
      ]
    },
    {
      category: 'Individual Contests',
      icon: '⭐',
      items: [
        { name: 'Meta Hacker Cup 2023 Round 1', rank: '115', country: 'Bangladesh', link: 'https://www.facebook.com/codingcompetitions/hacker-cup/2023/round-1/scoreboard' },
        { name: 'Meta Hacker Cup 2023 Round 2', rank: '154', country: 'Bangladesh', link: 'https://www.facebook.com/codingcompetitions/hacker-cup/2023/round-2/scoreboard', highlight: true },
        { name: 'Samsung Research and Development Contest', rank: '65', link: 'https://www.hackerrank.com/contests/srbd-code-contest-2023-round-2/leaderboard' },
        { name: 'Selise Coding Challenge 2023', rank: '175', link: 'https://toph.co/c/selise-coding-challenge-2023/standings' },
      ]
    }
  ]

  return (
    <section className={styles.cp}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Competitive Programming</h2>
          <p className={styles.sectionSubtitle}>
            My competitive programming profiles and achievements across various platforms and contests.
          </p>
        </div>

        <div className={styles.platformsSection}>
          <h3 className={styles.subsectionTitle}>Online Judge Profiles</h3>
          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.platformCard}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className={styles.platformHeader}>
                  <div className={styles.platformIcon} style={{ background: platform.color }}>
                    {platform.name.charAt(0)}
                  </div>
                  <h4 className={styles.platformName}>{platform.name}</h4>
                </div>
                <div className={styles.platformInfo}>
                  <p className={styles.platformHandle}>@{platform.handle}</p>
                  {platform.rating && (
                    <div className={styles.platformStats}>
                      <span className={styles.statItem}>Rating: <strong>{platform.rating}</strong></span>
                      {platform.title && (
                        <span className={styles.platformTitle}>{platform.title}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className={styles.platformArrow}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.contestsSection}>
          {contests.map((contestGroup, groupIndex) => (
            <div key={groupIndex} className={styles.contestGroup}>
              <div className={styles.contestGroupHeader}>
                <span className={styles.contestIcon}>{contestGroup.icon}</span>
                <h3 className={styles.contestGroupTitle}>{contestGroup.category}</h3>
              </div>
              <div className={styles.contestsGrid}>
                {contestGroup.items.map((contest, index) => (
                  <a
                    key={index}
                    href={contest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.contestCard} ${contest.highlight ? styles.highlight : ''}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className={styles.contestHeader}>
                      <h4 className={styles.contestName}>{contest.name}</h4>
                      {contest.rank && (
                        <span className={styles.contestRank}>
                          {contest.highlight ? '🏅' : ''} Rank {contest.rank}
                        </span>
                      )}
                    </div>
                    <div className={styles.contestMeta}>
                      {contest.team && <span className={styles.contestTeam}>{contest.team}</span>}
                      {contest.country && <span className={styles.contestCountry}>🇧🇩 {contest.country}</span>}
                    </div>
                    <div className={styles.contestArrow}>
                      <i className="bx bx-link-external"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
