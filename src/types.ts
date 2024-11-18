export interface Project {
  description: string
  images: string[]
  location: string
  time: number
}

export interface ProjectCategory {
  [key: string]: Project
}

export interface Projects {
  'arts-and-culture': ProjectCategory
  'city-and-landscape'?: ProjectCategory
  'commercial'?: ProjectCategory
  'hospitality'?: ProjectCategory
}

export interface Award {
  awards: string[]
  image: string
  category: string
}

export interface Awards {
  [title: string]: Award;
}

export interface New {
  date: string
  images: string[]
  article: string
}

export interface News {
  [title: string]: New
}

export type CategoryKeys = keyof Projects
