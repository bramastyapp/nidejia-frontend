import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/*`,
      },
    ],
  },
};

export default nextConfig;
