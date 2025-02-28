/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { not: /\.(css|scss|sass)$/ },
      oneOf: [
        {
          resourceQuery: /inline/,
          use: ["@svgr/webpack"]
        },
        {
          loader: 'next-image-loader',
          options: { isServer: true, isDev: true, basePath: '', assetPrefix: '' }
        }
      ],
    });

    return config;
  }
};
