import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danielaarguello.com'
  const locales = ['en', 'es']
  
  const routes = [
    '',
    '#about',
    '#experience',
    '#skills',
    '#projects',
    '#contact',
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  return sitemapEntries
}