const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const authConfig = {
  domain: "dev-ph-3iama.auth0.com",
  audience: "http://magello-api",
};

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-ph-3iama.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://magello-api",
  issuer: "https://dev-ph-3iama.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = {
  authConfig,
  jwtCheck,
};
