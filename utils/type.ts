import { IconType } from 'react-icons';

export interface IService {
  title: string
  about: string
  Icon: IconType
}

export interface INavItem {
  name: string
  route: string
}

export interface ISkill {
  name: string
  level: string
  Icon: IconType
}

export interface IProject {
  id: number
  name: string
  description: string
  imagePath: string
  deployedUrl: string
  githubUrl: string
  keyTechs: string[]
}

export interface IPosition {
  role: string
  duration: string
  description: string | null
  logoPath: string
  logoHeight?: number
  logoWidth?: number
}

export interface IExperience extends IPosition {
  company: string
  CompanyIcon?: IconType
  companyIconSize?: number
}

export interface IEducation extends IPosition {
  school: string
  SchoolIcon?: IconType
  schoolIconSize?: number
}

export interface IAchievement {
  title: string
  issuedBy: string
  description: string | null
  Icon: IconType
}
