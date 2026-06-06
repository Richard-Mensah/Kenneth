export type Stat = {
  value: string
  label: string
  detail: string
}

export type Role = {
  title: string
  organization: string
  sector: string
  period?: string
}

export type Pillar = {
  title: string
  description: string
  icon: "GraduationCap" | "HeartHandshake" | "Users" | "HardHat" | "Scale" | "Cpu"
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

export type Social = {
  label: string
  href: string
  icon: "Linkedin" | "Facebook" | "Twitter" | "Instagram" | "Youtube" | "Mail"
}
