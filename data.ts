import { IEducation, IProject, IService, ISkill } from './type';
import { BsCircleFill, BsCreditCard2FrontFill, BsLaptop, BsStarFill } from 'react-icons/bs';
import { ImDatabase } from 'react-icons/im';
import { MdExplore } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { GiMaterialsScience, GiElephant } from 'react-icons/gi';

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
    level: '95%',
    Icon: BsCircleFill,
  },
  {
    name: 'Java',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Javascript',
    level: '75%',
    Icon: BsCircleFill,
  },
  {
    name: 'Golang',
    level: '53%',
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Tool 1',
    level: '40%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tool 2',
    level: '45%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tool 3',
    level: '50%',
    Icon: BsCircleFill,
  },
];

export const educations: IEducation[] = [
  {
    school: 'Institut Teknologi Bandung',
    major: 'Informatics Engineering Student',
    SchoolIcon: GiElephant,
    schoolIconSize: 23,
    MajorIcon: BsLaptop,
    majorIconSize: 20,
    duration: '(2018 - 2022)',
    description: 'I am currently pursuing Bachelor of Engineering in Informatics Engineering Institut Teknologi Bandung',
  },
  {
    school: 'Alfa Centauri SHS',
    major: 'Mathematics & Science Student',
    SchoolIcon: BsStarFill,
    schoolIconSize: 23,
    MajorIcon: GiMaterialsScience,
    majorIconSize: 25,
    duration: '(2015 - 2018)',
    description: 'Activities includes mathematics olympics and CMA (Centaurian Moslem\'s Atmosphere) activity',
  },
];


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
