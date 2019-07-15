const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    name: "Express-Mongo",
    version: 1.0,
    description: "Simple Boilerplate",
    server_status: "Running"
  });
});

module.exports = routes;
