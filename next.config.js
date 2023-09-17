/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/drwsfgt0t/image/upload/**'
      }
    ],
    minimumCacheTTL: 60,
    deviceSizes: [480, 768, 1024, 1200, 2048],
    imageSizes: [16, 48, 96, 128, 348]
  },
  env: {
    API_HOST: 'https://musica-app.onrender.com/api'
  }
};

module.exports = nextConfig;
