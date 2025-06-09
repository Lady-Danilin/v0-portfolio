/** @type {import('next').NextConfig} */
// Trigger new deployment
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add trailing slashes to ensure proper routing
  trailingSlash: true,
  // Ensure static files are served correctly
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
  },
}

export default nextConfig
