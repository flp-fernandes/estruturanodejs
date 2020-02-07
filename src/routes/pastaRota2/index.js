const routes = require("express").Router();
const auth = require("../../src/middleware/auth");
const rota1 = require("./rota2-1");
const rota2 = require("./rota2-2");

routes.post("/rota1", auth, rota1);

routes.post("/rota2", auth, rota2);

routes.get("/status", (req, res) => {
  res.send({ status: "OK" });
});

module.exports = routes;
