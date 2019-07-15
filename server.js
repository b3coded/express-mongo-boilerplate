const server = require("./src");
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
