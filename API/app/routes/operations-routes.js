module.exports = app => {
    const operations = require("../controllers/operations-controller.js");
  
    // Create a new Operation
    app.post("/operations", operations.create);
  
    // Retrieve all Operations
    app.get("/operations", operations.findAll);

    // Retrieve last 10 Operations
    app.get("/latestoperations", operations.findLatest);
  
    // Retrieve a single Operation with operationId
    app.get("/operations/:operationId", operations.findOne);
  
    // Update a Operation with operationId
    app.put("/operations/:operationId", operations.update);
  
    // Delete a Operation with operationId
    app.delete("/operations/:operationId", operations.delete);
  
    // Delete all Operations
    app.delete("/operations", operations.deleteAll);
  };