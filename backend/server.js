// Instantiate Express
const express = require("express");
const app = express();

// Set the port of our server
const port = process.env.PORT || 8000;

// Add some middleware
app.use((req, res, next) => {
  console.log(
    `A ${req.method} request was sent to ${req.originalUrl} at`,
    Date()
  );
  next();
});

// Set a route for GET /
app.get("/", (req, res) => {
  res.json({ testData: "test" }).status(200);
});

// Set a route for GET /hello
app.get("/hello", (req, res) => {
  res.send("Hello!").status(200);
});

// Set a route for GET /hello/:name
app.get("/hello/:name/", (req, res) => {
  res.send(`Hello ${req.params.name}!`).status(200);
});

// Start listening on a specific port
app.listen(port, () => console.log(`Example app listening on port ${port}`));
