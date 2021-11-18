const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  env: {
    IDENTITY_CLIENT_ID: process.env.IDENTITY_CLIENT_ID,
    IDENTITY_ISSUER: process.env.IDENTITY_ISSUER,
    IDENTITY_CALLBACK_URL: process.env.IDENTITY_CALLBACK_URL,
    IDENTITY_SCOPES: process.env.IDENTITY_SCOPES,
  }
}
