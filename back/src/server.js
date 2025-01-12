const express = require("express");
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
