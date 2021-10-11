// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['www.mindsheep.com.au']
//   }
// }

// const withImages = require('next-images')
// module.exports = withImages()

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['wp.mindsheep.com.au']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)