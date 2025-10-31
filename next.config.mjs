/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Korjaa basePath vastaamaan repositorion nimeä
  basePath: '/resume', 
  // Korjaa assetPrefix vastaamaan repositorion nimeä
  assetPrefix: '/resume/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;