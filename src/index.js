const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    if (this.isDev) {
      require("dotenv/config");
    }

    require("./database");

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.json({ type: "application/vnd.api+json" }));
    this.express.use(morgan("dev"));
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
