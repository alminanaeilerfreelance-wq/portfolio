/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primefaces.org",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
