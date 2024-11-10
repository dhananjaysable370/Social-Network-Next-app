/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.clerk.com'], // Add img.clerk.com to allow images from this domain
    },
}

module.exports = nextConfig;
