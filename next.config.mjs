/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lacobuilders.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
