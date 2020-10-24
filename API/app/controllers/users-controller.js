const User = require("../models/users-model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create an User
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  
  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.json(data);
  });  
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).json({
            message:
              err.message || "Some error occurred while retrieving Users."
          });
        else res.json(data);
      });  
};

// Find a single User with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).json({
              message: `Not found User with id ${req.params.userId}.`
            });
          } else {
            res.status(500).json({
              message: "Error retrieving User with id " + req.params.userId
            });
          }
        } else res.json(data);
      });  
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.params.userId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).json({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).json({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.json(data);
    }
  );  
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).json({
              message: `Not found User with id ${req.params.userId}.`
            });
          } else {
            res.status(500).json({
              message: "Could not delete User with id " + req.params.userId
            });
          }
        } else res.json({ message: `User was deleted successfully!` });
      });  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
          res.status(500).json({
            message:
              err.message || "Some error occurred while removing all Users."
          });
        else res.json({ message: `All Users were deleted successfully!` });
      });  
};