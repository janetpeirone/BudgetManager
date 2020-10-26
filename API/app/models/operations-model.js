const sql = require("./db.js");

// constructor
const Operation = function(operation) {
  this.concept = operation.concept;
  this.amount = operation.amount;
  this.op_date = operation.op_date;
  this.op_type = operation.op_type;
  this.user_id = operation.user_id;
};

Operation.create = (newOperation, result) => {
  sql.query("INSERT INTO monetary_operations SET ?", newOperation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created operation: ", { id: res.insertId, ...newOperation });
    result(null, { id: res.insertId, ...newOperation });
  });
};

Operation.findById = (operationId, result) => {
  sql.query(`SELECT * FROM monetary_operations WHERE id = ${operationId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found operation: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Operation with the id
    result({ kind: "not_found" }, null);
  });
};

Operation.findByType = (operationType, result) => {
  sql.query(`SELECT * FROM monetary_operations WHERE (op_type = "${operationType}" AND user_id IS NULL) ORDER BY created_at DESC LIMIT 50`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found operations: ", res);
      result(null, res);
      return;
    }

    // not found Operation with the id
    result({ kind: "not_found" }, null);
  });
};

Operation.getBalance = result => {
  sql.query("SELECT SUM(CASE op_type WHEN 'Ingreso' THEN amount WHEN 'Egreso' THEN -amount END) AS 'value' FROM monetary_operations WHERE user_id IS NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("monetary_operations: ", res);
    result(null, res);
  });
};

Operation.getLatest = result => {
  sql.query("SELECT * FROM monetary_operations WHERE user_id IS NULL ORDER BY created_at DESC LIMIT 10 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("monetary_operations: ", res);
    result(null, res);
  });
};

Operation.updateById = (id, operation, result) => {
  sql.query(
    "UPDATE monetary_operations SET concept = ?, amount = ?, op_date = ? WHERE id = ?",
    [operation.concept, operation.amount, operation.op_date, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Operation with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated operation: ", { id: id, ...operation });
      result(null, { id: id, ...operation });
    }
  );
};

Operation.remove = (id, result) => {
  sql.query("DELETE FROM monetary_operations WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Operation with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted operation with id: ", id);
    result(null, res);
  });
};

Operation.removeAll = result => {
  sql.query("DELETE FROM monetary_operations", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} monetary_operations`);
    result(null, res);
  });
};

module.exports = Operation;