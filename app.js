const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();

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

app.use(jwtCheck);

app.get("/", (req, res) => {
  res.send("Root Index");
});

app.get("/authorized", (req, res) => {
  res.send("Secured Resource");
});

module.exports = app;
