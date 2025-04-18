
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
      'local-origin.dev',
      '*.local-origin.dev',
      '3000-idx-studio-1744886092092.cluster-2xid2zxbenc4ixa74rpk7q7fyk.cloudworkstations.dev',
      '3002-idx-studio-1744886092092.cluster-2xid2zxbenc4ixa74rpk7q7fyk.cloudworkstations.dev',
    ],

};

export default nextConfig;
