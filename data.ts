import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';
import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
  {
    title: 'Title Something 1',
    about: 'About Something 1',
    Icon: RiComputerLine,
  },
  {
    title: 'Title Something 2',
    about: 'About Something 2',
    Icon: RiComputerLine,
  },
  {
    title: 'Title Something 3',
    about: 'About <b>Something</b>  3',
    Icon: RiComputerLine,
  },
  {
    title: 'Title Something 4',
    about: 'About Something 4',
    Icon: RiComputerLine,
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
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
  {
    name: 'Compete HMIF Tech',
    description: 'This is a website to give competition materials',
    imagePath: '/images/compete-hmif-tech-web.png',
    deployedUrl: 'https://compete.hmif.tech/',
    githubUrl: 'https://github.com/hmif-itb/compete.hmif.tech',
    category: ['react'],
    keyTechs: ['React', 'NextJS', 'GatsbyJS', 'TailwindCSS'],
  },
];
