const mongoose = require("mongoose");

const { db } = require("../config/");

mongoose.Promise = global.Promise;

mongoose
  .connect(db.local.url, { useNewUrlParser: true, useFindAndModify: false })
  .then(
    () => {
      console.log("A Base de Dados foi conectada com sucesso!");
    },
    err => {
      console.log(`Erro ao conectar com a base de Dados... ${err}`);
      process.exit();
    }
  );
