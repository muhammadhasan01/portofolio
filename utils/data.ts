import { IAchievement, IEducation, IExperience, INavItem, IProject, IService, ISkill } from './type';
import { BsCircleFill, BsCreditCard2FrontFill, BsStar, BsStarFill } from 'react-icons/bs';
import { ImDatabase, ImAirplane } from 'react-icons/im';
import { MdExplore } from 'react-icons/md';
import { FaLaptopCode, FaMedal, FaTrophy, FaGlobe, FaArtstation } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { GiElephant, GiFruitBowl, GiElephantHead, GiSevenPointedStar } from 'react-icons/gi';

export const services: IService[] = [
  {
    title: 'Competitive Programming',
    about: 'I like to compete in programming,' +
      ' it\'s fun to learn and getting better at algorithms, data structure, and mostly problem solving',
    Icon: FaLaptopCode,
  },
  {
    title: 'Backend Development',
    about: 'I focus primarily on backend development. I have worked on several projects on the backend side, ' +
      'I think it\'s interesting to manage all sort of data in the background',
    Icon: ImDatabase,
  },
  {
    title: 'Frontend Development',
    about: 'I like to try frontend development too, it\'s always a challenge to code frontend side and deliver a great design interface and experience for users',
    Icon: BsCreditCard2FrontFill,
  },
  {
    title: 'Exploring Tech & Development Stuff',
    about: 'I love to explore all sort of tech and development stuff, anything that grasp my interest, I\'ll try to explore it',
    Icon: MdExplore,
  },
];

export const navItems: INavItem[] = [
  {
    name: 'about',
    route: '/',
  },
  {
    name: 'resume',
    route: '/resume',
  },
  {
    name: 'projects',
    route: '/projects',
  },
];

export const languages: ISkill[] = [
  {
    name: 'Python',
    level: '67%',
    Icon: BsCircleFill,
  },
  {
    name: 'C++',
    level: '88%',
    Icon: BsCircleFill,
  },
  {
    name: 'Java',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Javascript',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Golang',
    level: '53%',
    Icon: BsCircleFill,
  },
  {
    name: 'SQL',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '73%',
    Icon: BsCircleFill,
  },
  {
    name: 'NextJs',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'Spring Boot',
    level: '63%',
    Icon: BsCircleFill,
  },
  {
    name: 'ExpressJs',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'Flask',
    level: '45%',
    Icon: BsCircleFill,
  },
  {
    name: 'MongoDB',
    level: '50%',
    Icon: BsCircleFill,
  },
];

const CDN_PATH = 'https://ik.imagekit.io/2louui6ojn7/portofolio';
const EDUCATION_PATH = `${CDN_PATH}/educations`;

export const educations: IEducation[] = [
  {
    school: 'Institut Teknologi Bandung',
    role: 'Informatics Engineering Student',
    logoPath: `${EDUCATION_PATH}/itb.png`,
    logoWidth: 35,
    logoHeight: 35,
    SchoolIcon: GiElephant,
    schoolIconSize: 25,
    duration: '(2018 - 2022)',
    description: 'I am currently pursuing Bachelor of Engineering in Informatics Engineering Institut Teknologi Bandung',
  },
  {
    school: 'Alfa Centauri SHS',
    role: 'Mathematics & Science Student',
    logoPath: `${EDUCATION_PATH}/alcent.png`,
    logoWidth: 35,
    logoHeight: 30,
    SchoolIcon: BsStarFill,
    schoolIconSize: 23,
    duration: '(2015 - 2018)',
    description: 'Alhamdulillah, I became The Most Outstanding Student for the school year 2017/2018. ' +
      'Activities includes mathematics olympics and CMA (Centaurian Moslem\'s Atmosphere) activity',
  },
  {
    school: 'Alfa Centauri JHS',
    role: 'Student',
    logoPath: `${EDUCATION_PATH}/alcent.png`,
    logoWidth: 35,
    logoHeight: 30,
    SchoolIcon: BsStar,
    schoolIconSize: 23,
    duration: '(2012 - 2015)',
    description: 'Alhamdulillah, I Got the Highest National Junior High School Exam on Batch 2012. Activities includes mathematics olympics',
  },
]

const EXPERIENCE_PATH = `${CDN_PATH}/experiences`;

export const experiences: IExperience[] = [
  {

    company: 'GoTo Financial',
    role: 'Associate Software Engineer',
    logoPath: `${EXPERIENCE_PATH}/goto.png`,
    logoWidth: 60,
    logoHeight: 25,
    CompanyIcon: FaArtstation,
    companyIconSize: 23,
    duration: '(Aug. 2022 - Now)',
    description: 'Working as a Full-time Software Enginner in GoTo (Gojek Tokopedia) Financial'
  },
  {
    company: 'AdaKerja',
    role: 'Software Engineer Part Time',
    logoPath: `${EXPERIENCE_PATH}/adakerja.png`,
    logoWidth: 40,
    logoHeight: 40,
    CompanyIcon: FaArtstation,
    companyIconSize: 23,
    duration: '(May. 2022 - Aug. 2022)',
    description: 'Working as a Full Stack Engineer to develop various AdaKerja applications using React, ExpressJs, and MongoDB'
  },
  {
    company: 'Mekari',
    role: 'Software Engineer Intern',
    logoPath: `${EXPERIENCE_PATH}/mekari.webp`,
    logoWidth: 40,
    logoHeight: 40,
    CompanyIcon: GiSevenPointedStar,
    companyIconSize: 23,
    duration: '(Feb. 2022 - May. 2022)',
    description: 'Working as a Full Stack Engineer in Account and Launchpad Team using Ruby on Rails, VueJs, Docker, and Kong API Gateway'
  },
  {
    company: 'Traveloka',
    role: 'Backend Engineer Intern',
    logoPath: `${EXPERIENCE_PATH}/traveloka.png`,
    logoWidth: 40,
    logoHeight: 40,
    CompanyIcon: ImAirplane,
    companyIconSize: 20,
    duration: '(Aug. 2021 - Jan. 2022)',
    description: 'Working on Software API Testing using Karate Framework, Mountebank, and AWS',
  },
  {
    company: 'Sayurbox',
    role: 'Software Developer Engineer Intern',
    logoPath: `${EXPERIENCE_PATH}/sayurbox.png`,
    logoWidth: 45,
    logoHeight: 45,
    CompanyIcon: GiFruitBowl,
    companyIconSize: 23,
    duration: '(May. 2021 - Aug. 2021)',
    description: 'Mainly Working on Backend services using Java ' +
      'Spring Boot, MySQL, MongoDB, Jenkins, and OKD.',
  },
  {
    company: 'Pinhome',
    role: 'Software Engineer Intern',
    logoPath: `${EXPERIENCE_PATH}/pinhome.png`,
    logoWidth: 40,
    logoHeight: 40,
    CompanyIcon: AiFillHome,
    companyIconSize: 23,
    duration: '(Jan. 2021 - Mar. 2021)',
    description: 'Created backend services for CMS (Content Management System) to ' +
      'deliver forum threads within the internal people. Created using Golang, PostgreSQL, GORM and Kubernetes',
  },
];

export const achievements: IAchievement[] = [
  {
    title: 'National Gold Medalist ACM ICPC 2021<br/>Asia Jakarta Regional',
    issuedBy: 'Associating Computing Machinery',
    description: 'International Collegiate Programming Contest is ' +
      'an annual multi-tiered computer programming competition among the universities of the world',
    Icon: FaMedal,
  },
  {
    title: 'National Gold Medalist ACM ICPC 2020<br/>Asia Jakarta Regional',
    issuedBy: 'Associating Computing Machinery',
    description: 'International Collegiate Programming Contest is ' +
      'an annual multi-tiered computer programming competition among the universities of the world',
    Icon: FaMedal,
  },
  {
    title: 'Gold Medalist GEMASTIK XIII<br/>Programming Category',
    issuedBy: 'Kemendikbud',
    description: 'GEMASTIK is an annual national IT competition ' +
      'event. It has multiple competitions, one of them is the programming category',
    Icon: FaMedal,
  },
  {
    title: '1st Winner IYCL Vol. 1',
    issuedBy: 'Mekari x Money Forward',
    description: 'IYCL (Indonesian Young Coder League) is a competition for young engineers to show off and\n' +
      'prove their coding skills with others from around Indonesia',
    Icon: FaTrophy,
  },
  {
    title: 'Top 10 in IEEEXtreme 15.0',
    issuedBy: 'IEEE',
    description: 'IEEEXtreme is a global challenge in which teams of student members compete in a 24-hour ' +
      'time span against each other to solve a set of programming problems.',
    Icon: FaGlobe,
  },
  {
    title: 'Top 15 in Shopee Code League 2021',
    issuedBy: 'Shopee',
    description: 'Shopee Code League is a 3-week coding challenge consisting of 3 coding competitions (data analytics, data science, and algorithms) ' +
      'open to all students and professionals across the region.',
    Icon: FaGlobe,
  },
  {
    title: 'Ganesha Karsa Awardee 2021',
    issuedBy: 'Institut Teknologi Bandung',
    description: 'Ganesha Karsa is an award given by Institut Teknologi Bandung every year for ' +
      'getting national or international achievement representing ITB in the field of scientific or social community.',
    Icon: GiElephantHead,
  },
  {
    title: '2nd Winner in Code Run 2021',
    issuedBy: 'Algobash',
    description: 'Code Run is the biggest open programming competition in Indonesia. Open to all Indonesian code activists without age, ' +
      'profession and experience restrictions.',
    Icon: FaMedal,
  },
];

const PROJECT_PATH = `${CDN_PATH}/projects`;

export const projectData: IProject[] = [
  {
    id: 1,
    name: 'Compete HMIF Tech',
    description: 'Compete HMIF Tech is a website to give Competition and Community info to the world, ' +
      'this website includes starting guide to compete in competitions including ' +
      'Competitive Programming, Capture The Flag, Data Science, UI/UX Competition, and Game Development',
    imagePath: `${PROJECT_PATH}/compete-hmif-tech-web.webp`,
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    keyTechs: ['React', 'NextJs', 'GatsbyJs', 'TailwindCSS', 'Markdown', 'LaTeX'],
  },
  {
    id: 2,
    name: 'Fitness Android Application',
    description: 'Fitness Android Application is an android application that can support exercise activities that contain ' +
      'several features such as Sport News, Training Tracker, Training History, and Training Scheduler.',
    imagePath: `${PROJECT_PATH}/fitness-android.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/fitness-android-application',
    keyTechs: ['Android', 'Kotlin'],
  },
  {
    id: 3,
    name: 'Tanks Game Extended',
    description: 'Tanks Unity Game Extended! is a Tanks Game made with Unity. This game is a development of the Game Tanks Tutorial! ' +
      'so that in our game there are several additional features, such as LAN multiplayer, room system, bots, new weapons, ' +
      'money rush mode, and others.',
    imagePath: `${PROJECT_PATH}/tanks-extended.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/tanks-extended',
    keyTechs: ['Unity', 'C#'],
  },
  {
    id: 4,
    name: 'Academic Information System',
    description: 'This Academic Information System application was developed to meet the needs of academic administration activities on the STEI campus (School of Electrical and Informatics Engineering). ' +
      'This Academic Information System is managed by the admin and can be used by students and lecturers.',
    imagePath: `${PROJECT_PATH}/SIAK.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/aplikasi-sistem-informasi-akademik',
    keyTechs: ['MySQL', 'Python', 'PyQt', 'GUI'],
  },
  {
    id: 5,
    name: 'Money Monitoring Application',
    description: 'Money Monitoring Application is an application to monitor the finances of units and subunits at ' +
      'the School of Electrical and Informatics Engineering ITB. ' +
      'This app is built with ReactJS, React-Bootstrap, and several additional libraries.',
    imagePath: `${PROJECT_PATH}/stei-anggaran.webp`,
    deployedUrl: 'https://stei-monitoring-anggaran-15.herokuapp.com/',
    githubUrl: 'https://github.com/muhammadhasan01/aplikasi-monitor-keuangan-frontend',
    keyTechs: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs', 'Bootstrap', 'JWT'],
  },
  {
    id: 6,
    name: 'Avatar Duel Game Card',
    description: 'Avatar Duel Game Card is a card game application created with JavaFX. ' +
      'This game can be played by two people, each person has a card containing 3 types, ' +
      'namely land, character, and skill cards. Each of these dueling avatar cards has its own function, ' +
      'and of course, the contents of these cards are based on Avatar: The Last Airbender. ' +
      'The main objective of this game is to defeat the opposing player by reducing the opponent\'s health point to 0 or less.',
    imagePath: `${PROJECT_PATH}/avatar-dual.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/AvatarDuelGameCard',
    keyTechs: ['Java', 'JavaFX', 'OOP', 'GUI'],
  },
  {
    id: 7,
    name: 'Calculator Application',
    description: 'Calculator application is an application created using the Java programming language with GUI Swing. ' +
      'This Calculator application, as the name implies, is a calculator that can perform operations on mathematical expressions such as addition, subtraction, multiplication, and division.',
    imagePath: `${PROJECT_PATH}/calculator.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/Kalkulator_Java_Swing',
    keyTechs: ['Java', 'GUI', 'Java Swing'],
  },
  {
    id: 8,
    name: 'Halma AI',
    description: 'Halma is a strategy board game. The core of the project is implementing AI in the bot (computer player), ' +
      'using Minimax Algorithm, Local Search Algorithms (Hill Climbing or Simulated Annealing), ' +
      'and both, and finding out how good each algorithm performs.',
    imagePath: `${PROJECT_PATH}/halma-ai.webp`,
    deployedUrl: 'https://halma-euy.netlify.app/',
    githubUrl: 'https://github.com/muhammadhasan01/halma-AI',
    keyTechs: ['AI', 'HTML', 'CSS', 'Javascript'],
  },
  {
    id: 9,
    name: 'Golang RESTful API Forum',
    description: 'Golang RESTful API project provides the backend for a discussion forum with Users, Threads and Posts',
    imagePath: `${PROJECT_PATH}/golang.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/go-rest-api-forum',
    keyTechs: ['Golang', 'RESTful API', 'PostgreSQL'],
  },
  {
    id: 10,
    name: 'Personal Website',
    description: 'This is my personal website where I my put my information including activities, ' +
      'resume, and projects. Created with NextJs, Typescript, React, Framer Motion, and Tailwind CSS. ' +
      '(This is what you are seeing right now :D)',
    imagePath: `${PROJECT_PATH}/personal-website.webp`,
    deployedUrl: 'http://mhasan01.com/',
    githubUrl: 'https://github.com/muhammadhasan01/portofolio',
    keyTechs: ['NextJs', 'React', 'Framer Motion', 'Tailwind CSS']
  },
  {
    id: 11,
    name: 'Competitive Programming Repo',
    description: 'Collection of my competitive programming codes including libraries and competition solutions',
    imagePath: `${PROJECT_PATH}/cp.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/cp',
    keyTechs: ['C++', 'Algorithms', 'Data Structure']
  },
  {
    id: 12,
    name: 'Willy Wangky Web',
    description: 'Willi Wangky Choco Factory is a web-based online chocolate trading application.' +
      ' This application is made using PHP on the backend and HTML, CSS, and Javascript on the frontend.',
    imagePath: `${PROJECT_PATH}/willy-wangky.webp`,
    deployedUrl: null,
    githubUrl: 'https://github.com/muhammadhasan01/willy-wangky-web',
    keyTechs: ['HTML', 'CSS', 'Javascript', 'PHP']
  },
];
