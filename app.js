const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

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

app.get("/", (req, res) => {
  res.send("Index Root");
});

app.get("/api/external", jwtCheck, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

module.exports = app;
