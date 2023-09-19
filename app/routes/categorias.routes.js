module.exports = app => {
    const categorias = require("../controllers/categorias.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", categorias.create);
  
    router.get("/", categorias.findAll);
  
    router.get("/published", categorias.findAllPublished);
  
    router.get("/:id", categorias.findOne);
  
    router.put("/:id", categorias.update);
  
    router.delete("/:id", categorias.delete);
  
    router.delete("/", categorias.deleteAll);
  
    app.use("/api/categoria", router);
  };