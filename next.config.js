/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   webVitalsAttribution: ['CLS', 'FID', 'FCP', 'INP', 'LCP', 'TTFB']
  // }
};

module.exports = nextConfig;
