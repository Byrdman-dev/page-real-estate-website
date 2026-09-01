// next.config.js
// images.unoptimized skips Next's image loader, which is what normally
// prepends basePath, so components prepend it themselves via NEXT_PUBLIC_BASE_PATH.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  trailingSlash: true,    // generates folders with index.html for each page
  images: { unoptimized: true },
  basePath: '/page-real-estate-website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/page-real-estate-website'
  }
};

module.exports = nextConfig;