const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => {
  res.send("Olá.");
});

module.exports = routes;
