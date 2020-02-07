const express = require("express");

require("dotenv").config({ encoding: "utf8" });

//carregando o Express framework
const app = express();

//definindo porta do ambiente
const PORT = process.env.PORT || 5000;

//definindo o bodyParser do Express
app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, (req, res) => {
  console.log(`Server ativo na port ${PORT}.`);
});

module.exports = { app };
