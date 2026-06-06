import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kennethaduakwabeng.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/profile", "/impact", "/projects", "/leadership", "/gallery", "/contact"]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
