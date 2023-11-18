/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {
    experimental: {
        esmExternals: 'loose',
        serverComponentsExternalPackages: ['mongoose'],
        swcMinify: true,
    },
}

module.exports = withContentlayer(nextConfig)
