module.exports = (app) => {
  const improvements = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", improvements.create);

  // Retrieve all Tutorials by title
  router.get("/", improvements.findAllByTitle);

  // Retrieve all Tutorials
  router.get("/", improvements.findAll);

  

  // Retrieve all published Tutorials

  // Retrieve a single Tutorial with id
  router.get("/:id", improvements.findOne);

  // Update a Tutorial with id
  router.put("/:id", improvements.update);

  // Delete a Tutorial with id
  router.delete("/:id", improvements.delete);


  app.use("/api/improvements", router);
};
