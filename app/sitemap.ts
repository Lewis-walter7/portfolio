import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lewisindusa.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Add other routes here if they become static pages in the future
    ]
}
