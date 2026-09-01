// next.config.js
const basePath = '/page-real-estate-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  trailingSlash: true,    // generates folders with index.html for each page
  images: { unoptimized: true },
  basePath,
  env: {
    // images.unoptimized skips Next's image loader, which is what normally
    // prepends basePath, so components must prepend it themselves.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;