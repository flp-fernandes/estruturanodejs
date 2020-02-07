const routes = require("express").Router();
const pastaRota1 = require("./pastaRota1");
const pastaRota2 = require("./pastaRota2");

routes.use("/pastarota1", pastaRota1);

routes.use("/pastarota2", pastaRota2);

routes.get("/", (req, res) => res.send({ status: "Connected to server" }));

module.exports = routes;
