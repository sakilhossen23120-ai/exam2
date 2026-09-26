/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/2n-exam',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
};

export default nextConfig;