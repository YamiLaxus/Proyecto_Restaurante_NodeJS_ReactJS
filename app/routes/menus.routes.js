module.exports = app => {
    const menus = require("../controllers/menus.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", menus.create);
  
    router.get("/", menus.findAll);
  
    router.get("/published", menus.findAllPublished);
  
    router.get("/:id", menus.findOne);
  
    router.put("/:id", menus.update);
  
    router.delete("/:id", menus.delete);
  
    router.delete("/", menus.deleteAll);
  
    app.use("/api/menu", router);
  };