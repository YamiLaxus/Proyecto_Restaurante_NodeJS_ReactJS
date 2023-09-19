module.exports = app => {
  const mesas = require("../controllers/mesas.controller.js");

  var router = require("express").Router();

  router.post("/", mesas.create);

  router.get("/", mesas.findAll);

  router.get("/published", mesas.findAllPublished);

  router.get("/:id", mesas.findOne);

  router.put("/:id", mesas.update);

  router.delete("/:id", mesas.delete);

  router.delete("/", mesas.deleteAll);

  app.use("/api/mesa", router);
};