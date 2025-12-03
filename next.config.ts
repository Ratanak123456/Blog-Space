import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended for catching React issues
  compiler: {
    reactRemoveProperties: true, // Optional optimization for production
  },
  images: {
    // Use remotePatterns for dynamic URLs (Next.js 13+)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Placeholder images
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub avatars
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile images
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary or CDN
      },
    ],
    formats: ["image/avif", "image/webp"], // Serve modern image formats for performance
    minimumCacheTTL: 60, // Cache external images for 60 seconds (adjust as needed)
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

export default nextConfig;
