// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  trailingSlash: true,    // generates folders with index.html for each page
  images: { unoptimized: true },
  basePath: '/page-real-estate-website'
};

module.exports = nextConfig;