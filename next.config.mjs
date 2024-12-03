/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: "babel-loader",
      include: /node_modules\/@fsirigm2\/obe-example/,
    });

    return config;
  },
};

export default nextConfig;
