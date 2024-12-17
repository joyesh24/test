/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps identify potential problems
    images: {
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Whitelist your image domain
    },
    experimental: {
      appDir: true, // Enables the experimental app directory feature (if using Next 13+)
    },
    eslint: {
      ignoreDuringBuilds: true, // Allows builds to proceed even if ESLint errors occur
    },
  }
  
  module.exports = nextConfig