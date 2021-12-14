import { IProject, IService, ISkill } from './type';
import { BsCircleFill, BsCreditCard2FrontFill } from 'react-icons/bs';
import { SiCodewars } from 'react-icons/si';
import { ImDatabase } from 'react-icons/im';
import { MdExplore } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

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
