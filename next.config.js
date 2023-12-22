/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.iconpusher.com',
        port: '',
      },
    ],
  },

}

module.exports = nextConfig
