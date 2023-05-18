const DEVELOPMENT = {
  ENVIRONMENT: "development",
  PORT: 3001,
  CLIENT_DOMAIN: "localhost"
};

const PRODUCTION = {
  ENVIRONMENT: "production",
  PORT: 80,
  CLIENT_DOMAIN: "autumn-kim-barkr-app.com"
};

module.exports = process.env.NODE_ENV === "production" ? PRODUCTION : DEVELOPMENT