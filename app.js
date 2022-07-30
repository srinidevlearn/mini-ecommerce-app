const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const router = require("./routes/index.router");
const bodyParser = require("body-parser");
const { mongoose } = require("./config/db.config");
const RESPONSE_STATUS = require("./util/res.constant");

const app = express();


app.use(logger("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);

// // catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = RESPONSE_STATUS.BADREQUEST;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.json({ message: "Bad Request" });
});

module.exports = app;
