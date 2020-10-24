const express = require('express');
const router = express.Router();

const operations = require("../controllers/operations-controller.js");

// Create a new Operation
router.post("/operations", operations.create);

// Retrieve all Operations
router.get("/operations", operations.findAll);

// Retrieve last 10 Operations
router.get("/latestoperations", operations.findLatest);

// Retrieve a single Operation with operationId
router.get("/operations/:operationId", operations.findOne);

// Update a Operation with operationId
router.put("/operations/:operationId", operations.update);

// Delete a Operation with operationId
router.delete("/operations/:operationId", operations.delete);

// Delete all Operations
router.delete("/operations", operations.deleteAll);

module.exports = router;