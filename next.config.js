/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org']
  },
  async redirects() {
    return [
      {
        source:'/contact/:path*',
        destination: '/form/:path*',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [{
      source: '/api/movies',
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}

module.exports = nextConfig
