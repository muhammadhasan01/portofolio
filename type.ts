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

export type Category = "react" | "node" | "express" | "django" | "mongo";
