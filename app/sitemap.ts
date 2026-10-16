import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL
  if (!origin) return []
  return [{ url: new URL('/', origin).toString(), lastModified: new Date() }]
}
