import { IconType } from 'react-icons';

export interface IService {
  title: string,
  about: string,
  Icon: IconType
}

export interface INavItem {
  name: string,
  route: string
}

export interface ISkill {
  name: string,
  level: string,
  Icon: IconType
}

export interface IProject {
  id: number,
  name: string,
  description: string,
  imagePath: string,
  deployedUrl: string,
  githubUrl: string,
  keyTechs: string[]
}

export interface IExperience {
  company: string,
  role: string,
  CompanyIcon: IconType,
  companyIconSize: number,
  duration: string,
  description: string | null
}

export interface IAchievement {
  title: string,
  issuedBy: string,
  description: string | null,
  Icon: IconType
}
