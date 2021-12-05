const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.send("Hello World");
});

const userRoutes = require('./routes/user');



