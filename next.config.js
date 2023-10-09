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
    //output: 'export',
    typescript: {
      // !! TBD - To be removed !!
      ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
