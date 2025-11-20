// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-path/:slug',
        destination: '/new-path/:slug',
      },
    ]
  },
}
