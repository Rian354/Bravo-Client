/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    eslint: { 
      ignoreDuringBuilds: true, 
    }, 
    distDir: "bravo",
    trailingSlash: true,
    typescript: {
      // !! TBD - To be removed !!
      ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
