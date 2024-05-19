interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'NBA Scores',
    description: `A web application for viewing NBA match results and team statistics. Using Next.js, TypeScript, Tailwind CSS and the NBA API, the web application allows users to view NBA results in real time and also see upcoming games and previous results.`,
    imgSrc: '/static/images/nba-logo.png',
    href: 'https://nba-livescores.netlify.app',
  },
  {
    title: 'Chillhoop Music Player',
    description: `A music player that allows users to listen to various tracks. As for the build, HTML, SCSS, CSS, JavaScript and Firebase were used for hosting. Gulp was also used to compile Sass, map CSS files, minimize and optimize files.`,
    imgSrc: '/static/images/chillhop-logo.png',
    href: 'https://chillhoop-music-player.web.app/',
  },
]

export default projectsData
