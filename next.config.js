/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    deviceSizes: [480, 768, 1024, 1200, 2048],
    imageSizes: [16, 48, 96, 128, 348]
  }
};

module.exports = nextConfig;
