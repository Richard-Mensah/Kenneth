export type Stat = {
  value: string
  label: string
  detail: string
}

export type Role = {
  title: string
  organization: string
  period?: string
}

export type Project = {
  title: string
  category: string
  description: string
  image: string
  alt: string
}

export type GalleryImage = {
  src: string
  alt: string
  category: string
  fileName: string
}
