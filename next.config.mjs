/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'], remotePatterns: [] },
  async headers() {
    return [{ source: '/(.*)'  , headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ]}]
  },
  async redirects() {
    return [
      { source: '/apply', destination: '/qualify', permanent: true },
      { source: '/grants', destination: '/funding', permanent: true },
      { source: '/programs', destination: '/funding', permanent: true },
      { source: '/contact', destination: '/book', permanent: false },
    ]
  },
}
export default nextConfig
