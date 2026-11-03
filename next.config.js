/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // Next 13 n'a plus de correctifs : l'optimiseur d'images est coupé
    // (GHSA-2xp9-vwfh-vxw4, GHSA-2464-fhr4-w9xw) en attendant Next 16.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-west-3.amazonaws.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
