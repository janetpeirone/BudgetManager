const express = require("express");
const bodyParser = require("body-parser");
const operationsRoutes = require('./app/routes/operations-routes');
const usersRoutes = require('./app/routes/users-routes');
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: '*'
}

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BudgetManager aplication." });
});

app.use('',cors(corsOptions), operationsRoutes);
app.use('',cors(corsOptions), usersRoutes);

// set port, listen for requests
app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});