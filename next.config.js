/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '';
let basePrefix = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePrefix = `/${repo}`
}


const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
  basePrefix,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
