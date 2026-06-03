/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ontariofunding.ca',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  robotsTxtOptions: { policies: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/qualify/thank-you'] }] },
  exclude: ['/admin', '/admin/login', '/qualify/thank-you', '/api/*'],
  transform: async (config, path) => {
    let priority = 0.7, changefreq = 'weekly'
    if (path === '/') { priority = 1.0; changefreq = 'weekly' }
    if (path === '/qualify') { priority = 0.9; changefreq = 'monthly' }
    if (path === '/book') { priority = 0.85; changefreq = 'monthly' }
    if (path === '/funding') { priority = 0.85; changefreq = 'weekly' }
    if (path.startsWith('/funding/')) { priority = 0.8; changefreq = 'monthly' }
    if (path === '/privacy') { priority = 0.3; changefreq = 'yearly' }
    return { loc: path, changefreq, priority, lastmod: config.autoLastmod ? new Date().toISOString() : undefined }
  },
}
