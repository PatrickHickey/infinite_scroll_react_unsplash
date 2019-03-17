module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    '2a930319a914bd045fa4ebfaa3f981c87eec190d9fcb1619369d5ba1443aea7e',
  SECRET:
    process.envSECRET ||
    '0c08e4adf0974993b9124dd8c56a0944d74791a4708a83f99da44a825c340a9a',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
