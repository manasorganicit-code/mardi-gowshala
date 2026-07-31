import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.12",
    "importer-strung-unnamable.ngrok-free.dev",
  ],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
