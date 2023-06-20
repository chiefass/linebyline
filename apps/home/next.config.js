const { i18n } = require("./next-i18next.config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // debug: true,
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig