const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/registeruser", function (req, res) {
  let body = req.body;
});

app.listen(process.env.PORT || 3000);
