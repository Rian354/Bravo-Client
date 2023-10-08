/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    eslint: { 
      ignoreDuringBuilds: true, 
    }, 
    env: {
        PUBLIC_URL: "/"
    },
    distDir: "bravo",
    trailingSlash: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
