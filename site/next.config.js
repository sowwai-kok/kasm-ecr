/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm ArkStack',
    description: 'The official store for ArkStack supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://sowwai-kok.github.io/kasm-ecr',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-ecr/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
