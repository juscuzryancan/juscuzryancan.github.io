/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
}


const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig