const express = require('express');
const router = express.Router();

const operations = require("../controllers/operations-controller.js");

// Create a new Operation
router.post("/operations", operations.create);

// Retrieve all Operations
router.get("/operations", operations.findBalance);

// Retrieve last 10 Operations
router.get("/latestoperations", operations.findLatest);

// Retrieve Operations by Type
router.get("/operations/:operationType", operations.findType);

// Retrieve a single Operation with operationId
router.get("/:operationId", operations.findOne);

// Update a Operation with operationId
router.put("/:operationId", operations.update);

// Delete a Operation with operationId
router.delete("/:operationId", operations.delete);

// Delete all Operations
router.delete("/operations", operations.deleteAll);

module.exports = router;