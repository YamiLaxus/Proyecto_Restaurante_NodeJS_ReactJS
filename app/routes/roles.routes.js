module.exports = app => {
    const roles = require("../controllers/roles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", roles.create);
  
    // Retrieve all Tutorials
    router.get("/", roles.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    // app.use("/api/tutorials", router);
  };