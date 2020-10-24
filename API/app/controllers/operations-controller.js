const Operation = require("../models/operations-model.js");

// Create and Save a new Operation
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create an Operation
  const operation = new Operation({
    concept: req.body.concept,
    amount: req.body.amount,
    op_date: req.body.op_date,
    op_type: req.body.op_type,
    user_id: req.body.user_id
  });
  
  // Save Operation in the database
  Operation.create(operation, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the operation."
      });
    else res.json(data);
  });  
};

// Retrieve all Operations from the database.
exports.findAll = (req, res) => {
    Operation.getAll((err, data) => {
        if (err)
          res.status(500).json({
            message:
              err.message || "Some error occurred while retrieving operations."
          });
        else res.json(data);
      });  
};

// Retrieve lasts 10 Operations from the database.
exports.findLatest = (req, res) => {
  Operation.getLatest((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving operations."
        });
      else res.json(data);
    });  
};


// Find a single Operation with a operationId
exports.findOne = (req, res) => {
    Operation.findById(req.params.operationId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).json({
              message: `Not found operation with id ${req.params.operationId}.`
            });
          } else {
            res.status(500).json({
              message: "Error retrieving operation with id " + req.params.operationId
            });
          }
        } else res.json(data);
      });  
};

// Update a Operation identified by the operationId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  Operation.updateById(
    req.params.operationId,
    new Operation(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).json({
            message: `Not found operation with id ${req.params.operationId}.`
          });
        } else {
          res.status(500).json({
            message: "Error updating operation with id " + req.params.operationId
          });
        }
      } else res.json(data);
    }
  );  
};

// Delete a Operation with the specified operationId in the request
exports.delete = (req, res) => {
    Operation.remove(req.params.operationId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).json({
              message: `Not found operation with id ${req.params.operationId}.`
            });
          } else {
            res.status(500).json({
              message: "Could not delete operation with id " + req.params.operationId
            });
          }
        } else res.json({ message: `Operation was deleted successfully!` });
      });  
};

// Delete all Operations from the database.
exports.deleteAll = (req, res) => {
    Operation.removeAll((err, data) => {
        if (err)
          res.status(500).json({
            message:
              err.message || "Some error occurred while removing all operations."
          });
        else res.json({ message: `All operations were deleted successfully!` });
      });  
};