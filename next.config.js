// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,    // generates folders with index.html for each page
  images: { unoptimized: true }
};

module.exports = nextConfig;