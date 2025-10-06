import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools.entekhabservice.ir",
        pathname: "/slider/**",
      },
      {
        protocol: "https",
        hostname: "api2.entekhabservice.ir",
        pathname: "/ServicerClubObjectStorage/**", // تمام مسیرهای تصاویر
      },
      {
        protocol: "https",
        hostname: "entekhab-src.s3.ir-thr-at1.arvanstorage.ir",
        pathname: "/entekhab-src/ServicersClub/**",
      },
    ],
  },
};

export default nextConfig;
