module.exports = {
  restApiRoot: "/api",
  host: "0.0.0.0",
  port: "3000",
  remoting: {
    context: {
      enableHttpContext: true
    },
    rest: {
      normalizeHttpPath: false,
      xml: false
    },
    json: {
      strict: false,
      limit: "100kb"
    },
    urlencoded: {
      extended: true,
      limit: "100kb"
    },
    cors: false,
    errorHandler: {
      disableStackTrace: true
    }
  },
  legacyExplorer: false,

  zngit: {
    host: process.env.ZNGIT_HOST,
    email: process.env.ZNGIT_EMAIL,
    stripe_recipient: {
      name: "Zngit Customer Service",
      type: process.env.ZNGIT_STRIPE_RECIPIENT_TYPE,
      bank_account: {
        country: process.env.ZNGIT_STRIPE_RECIPIENT_BANK_COUNTRY,
        routing_number: process.env.ZNGIT_STRIPE_RECIPIENT_BANK_ROUTING_NUMBER,
        account_number: process.env.ZNGIT_STRIPE_RECIPIENT_BANK_ACCOUNT_NUMBER
      },
      tax_id: process.env.ZNGIT_STRIPE_RECIPIENT_TAX_ID
    },
    stripe_publish_key: "stripe_publish_key",
    stripe_secret_key: "stripe_secret_key",
    facebook_password: process.env.ZNGIT_FACEBOOK_PASSWORD
  }
};
