const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World454");
});

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
