import { notFound } from 'next/navigation'
import PortfolioDetail from '@/components/PortfolioDetail'

const portfolioData: Record<string, {
  title: string
  images: string[]
  language: string
  tools: string
  projectUrl: string
  description: string
}> = {
  carmania: {
    title: 'Car Mania',
    images: [
      '/assets/projects/carmania/1.png',
      '/assets/projects/carmania/2.png',
      '/assets/projects/carmania/3.png',
      '/assets/projects/carmania/4.png',
      '/assets/projects/carmania/5.png',
      '/assets/projects/carmania/6.png',
    ],
    language: 'C/C++, iGraphics',
    tools: 'Microsoft Visual Studio',
    projectUrl: 'https://github.com/SajidAbdullah729/Car-Mania',
    description: 'This is a car racing game. The project is created with C/C++ with the help of iGraphics.',
  },
  medimart: {
    title: 'Medimart',
    images: [
      '/assets/projects/medimart/1.png',
      '/assets/projects/medimart/2.png',
      '/assets/projects/medimart/3.png',
      '/assets/projects/medimart/4.png',
      '/assets/projects/medimart/5.png',
      '/assets/projects/medimart/6.png',
      '/assets/projects/medimart/7.png',
      '/assets/projects/medimart/8.png',
    ],
    language: 'Java Swing, Microsoft SQL Server',
    tools: 'NetBeans',
    projectUrl: 'https://github.com/SajidAbdullah729/MediMart',
    description: 'This is a medicine management system which is done by teammates with the help of Java Swing and database Microsoft SQL server.',
  },
  nextgen: {
    title: 'NextGen Hospital Management Hub',
    images: [
      '/assets/projects/nextgen/1.png',
      '/assets/projects/nextgen/3.png',
      '/assets/projects/nextgen/4.png',
      '/assets/projects/nextgen/5.png',
      '/assets/projects/nextgen/6.png',
      '/assets/projects/nextgen/7.png',
      '/assets/projects/nextgen/8.png',
    ],
    language: 'Java Swing, MySQL',
    tools: 'NetBeans',
    projectUrl: 'https://github.com/SajidAbdullah729/NextGen-Hospital-Management-Hub',
    description: 'This is a hospital management system where some special features like FirstAid, Captcha and Suggestions are included.',
  },
  alaska: {
    title: 'AlaskaExpress',
    images: [
      '/assets/projects/alaska/1.png',
      '/assets/projects/alaska/2.png',
      '/assets/projects/alaska/3.png',
      '/assets/projects/alaska/4.png',
      '/assets/projects/alaska/5.png',
      '/assets/projects/alaska/6.png',
      '/assets/projects/alaska/7.png',
      '/assets/projects/alaska/8.png',
      '/assets/projects/alaska/9.png',
    ],
    language: 'C#, ASP.NET MVC, MS SQL, Bootstrap',
    tools: 'Microsoft Visual Studio Code',
    projectUrl: 'https://github.com/SajidAbdullah729/AlaskaExpress',
    description: 'This is a bus management app where C# and ASP.NET MVC actively used with bootstrap. People can buy tickets in this app.',
  },
}

// Generate static params for all projects at build time
export function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({
    slug: slug,
  }))
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioData[params.slug]

  if (!project) {
    notFound()
  }

  return <PortfolioDetail project={project} />
}

