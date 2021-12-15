import { IExperience, IProject, IService, ISkill } from './type';
import { BsCircleFill, BsCreditCard2FrontFill, BsStar, BsStarFill } from 'react-icons/bs';
import { ImDatabase, ImAirplane } from 'react-icons/im';
import { MdExplore } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { GiElephant, GiFruitBowl } from 'react-icons/gi';

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
    about: 'I like to explore all sort of tech and development stuff, anything that grasp my interest, I\'ll try to explore it',
    Icon: MdExplore,
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
    name: 'React',
    level: '73%',
    Icon: BsCircleFill,
  },
  {
    name: 'Spring Boot',
    level: '63%',
    Icon: BsCircleFill,
  },
  {
    name: 'ExpressJS',
    level: '65%',
    Icon: BsCircleFill,
  },
];

export const educations: IExperience[] = [
  {
    company: 'Institut Teknologi Bandung',
    role: 'Informatics Engineering Student',
    CompanyIcon: GiElephant,
    companyIconSize: 25,
    duration: '(2018 - 2022)',
    description: 'I am currently pursuing Bachelor of Engineering in Informatics Engineering Institut Teknologi Bandung',
  },
  {
    company: 'Alfa Centauri SHS',
    role: 'Mathematics & Science Student',
    CompanyIcon: BsStarFill,
    companyIconSize: 23,
    duration: '(2015 - 2018)',
    description: 'Got the Highest National Senior High School Exam on Batch 2015. ' +
      'Activities includes mathematics olympics and CMA (Centaurian Moslem\'s Atmosphere) activity',
  },
  {
    company: 'Alfa Centauri JHS',
    role: 'Science Student',
    CompanyIcon: BsStar,
    companyIconSize: 23,
    duration: '(2012 - 2015)',
    description: 'Got the Highest National Junior High School Exam on Batch 2012. Activities includes mathematics olympics',
  },
];

export const experiences: IExperience[] = [
  {
    company: 'Traveloka',
    role: 'Backend Engineer Intern',
    CompanyIcon: ImAirplane,
    companyIconSize: 20,
    duration: '(Aug. 2018 - Present)',
    description: 'Working on Software API Testing using Karate Framework, Mountebank, and AWS',
  },
  {
    company: 'Sayurbox',
    role: 'Software Developer Engineer Intern',
    CompanyIcon: GiFruitBowl,
    companyIconSize: 23,
    duration: '(May. 2021 - Aug. 2021)',
    description: 'Mainly Working on Backend services using Java ' +
      'Spring Boot, MySQL, MongoDB, Jenkins, and OKD.',
  },
  {
    company: 'Pinhome',
    role: 'Software Engineer Intern',
    CompanyIcon: AiFillHome,
    companyIconSize: 23,
    duration: '(Jan. 2021 - Mar. 2021)',
    description: 'Created backend services for CMS (Content Management System) to ' +
      'deliver forum threads within the internal people. Created using Golang, PostgreSQL, GORM and Kubernetes',
  },
];

/*export const experiences: IExperience[] = [
  {
    company: 'Traveloka',
    role: 'Backend Engineer Intern',
    duration: '(Aug. 2021 - Present)',
    description: 'Working on Software API Testing using Karate Framework, Mountebank, and AWS.',
    Icon: ImAirplane,
  },
  {
    company: 'Sayurbox',
    role: 'Software Developer Engineer Intern',
    duration: '(May. 2021 - Aug. 2021)',
    description: 'Mainly Working on Backend services using Java ' +
      'Spring Boot, MySQL, MongoDB, Jenkins, and OKD.',
    Icon: GiFruitBowl,
  },
  {
    company: 'Pinhome',
    role: 'Software Engineer Intern',
    duration: '(Jan. 2021 - Mar. 2021)',
    description: 'Created backend services for CMS (Content Management System) to ' +
      'deliver forum threads within the internal people. Created using Golang, PostgreSQL, GORM and Kubernetes',
    Icon: AiOutlineHome,
  },
];*/

export const projectData: IProject[] = [
  {
    id: 1,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 2,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 3,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 4,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 5,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 6,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    id: 7,
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
];
