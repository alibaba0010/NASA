const path = require("path");
const express = require("express");
require('express-async-errors');
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(
  cors(
    {
    origin: ["http://localhost:3000", "http://192.168.244.55:3000/"],
  }
  )
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join("public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
