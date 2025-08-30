/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dnzzhkywsdpcakrczrte.supabase.co'
    ],
  },
  // Allow production builds to complete even if there are ESLint/TS issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 