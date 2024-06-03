interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Threads Clone',
    description: `A webapp that clones the Threads app functionalities like post, comment and create communities, the app have a beautiful and user friendly interface.`,
    imgSrc: '/static/images/threads-banner.png',
    href: 'https://threads-clone-v1.vercel.app',
  },
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
  {
    title: 'Sthenes Initiative',
    description: `Sthenes is an open source software and technology research and development foundation.`,
    imgSrc: '/static/images/sthenes-banner.png',
    href: 'https://sthenes.vercel.app/',
  },
  {
    title: 'Atalaso',
    description: `Atalaso is a software development and IT services company founded with the idea of making the transition to digital easier, efficient and more profitable by creating customer-centric experiences.`,
    imgSrc: '/static/images/atalaso-banner.png',
    href: 'https://atalaso.com/',
  },
  {
    title: 'Shops eCommerce webApp',
    description: `It is a Web app that offers all the functionalities of an E-Commerce website. Products, product page with information about the product has a cart where customers can add items to the list it also offers the possibility for the customer to log in with google authentication, it also allows users to create an account with an email and also allows password reset if necessary.`,
    imgSrc: '/static/images/shops-banner.png',
    href: 'https://react-ecommerce-webapp-20aa4.web.app/',
  },
]

export default projectsData
