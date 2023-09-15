import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://musica-app-topaz.vercel.app/home',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://musica-app-topaz.vercel.app/collection',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    }
  ];
}
