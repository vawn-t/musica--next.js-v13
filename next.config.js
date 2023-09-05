/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    remotePattern: {
      protocol: 'https',
      host: 'res.cloudinary.com',
      port: '',
      pathname: '/**'
    },
    minimumCacheTTL: 60
  }
};

module.exports = nextConfig;
