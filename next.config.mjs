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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add trailing slashes to ensure proper routing
  trailingSlash: true,
}

export default nextConfig
