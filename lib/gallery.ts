import fs from "node:fs"
import path from "node:path"

import type { GalleryImage } from "@/types"

const CATEGORY_LABELS: Record<string, string> = {
  "bibiani-donation": "Bibiani Orphanage Donation",
  "bitim-school-project": "BITIM School Construction",
  "cleanup-ashiam": "Ashiam Community Clean-Up",
  "kenneth-leadership": "Leadership & Public Engagement",
  "nugs-farm": "NUGS Farm Initiative",
  "youth-engineering": "Youth in Engineering Forum",
}

function getCategory(fileName: string) {
  const key = Object.keys(CATEGORY_LABELS).find((label) => fileName.startsWith(label))

  return key ? CATEGORY_LABELS[key] : "Gallery"
}

export function getGalleryImages(): GalleryImage[] {
  const galleryDirectory = path.join(process.cwd(), "public", "images", "gallery")

  if (!fs.existsSync(galleryDirectory)) {
    return []
  }

  return fs
    .readdirSync(galleryDirectory)
    .filter((fileName) => /\.(jpe?g|png|webp)$/i.test(fileName))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => {
      const category = getCategory(fileName)

      return {
        src: `/images/gallery/${fileName}`,
        alt: `${category} photo from Kenneth Adu-Akwabeng's work.`,
        category,
        fileName,
      }
    })
}
