module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/reviews',
          permanent: true,
        },
      ]
    }
}