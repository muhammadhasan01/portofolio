import { IconType } from 'react-icons';

export interface IService {
  title: string,
  about: string,
  Icon: IconType
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
  category: Category[],
  keyTechs: string[]
}

export interface IEducation {
  school: string,
  major: string,
  SchoolIcon: IconType,
  schoolIconSize: number,
  MajorIcon: IconType,
  majorIconSize: number,
  duration: string,
  description: string | null
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
