/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/My-PortFolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-PortFolio' : '',
  trailingSlash: true,
}

module.exports = nextConfig

