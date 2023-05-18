const DEVELOPMENT = {
  ENVIRONMENT: "development",
  API_URL: "http://localhost:3001"
};

const PRODUCTION = {
  ENVIRONMENT: "production",
  API_URL: "http://api.autumn-kim-barkr-app.com"
};

export default process.env.NODE_ENV === "production" ? PRODUCTION : DEVELOPMENT;
