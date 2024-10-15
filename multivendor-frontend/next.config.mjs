/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        /*  port: '',
        pathname: '/account123/**', */
      },

      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
