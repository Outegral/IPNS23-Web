/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "farm66.staticflickr.com",
                port: "",
                pathname: "/65535/**"
            }
        ]
    },
    "fontawesome-svg-core": {
        "license": "free"
    }
}

module.exports = nextConfig
