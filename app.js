const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const router = require("./routes/index.router");
const bodyParser = require("body-parser");
const { mongoose } = require("./config/db.config");
const RESPONSE_STATUS = require("./util/res.constant");
const cors = require("cors");

const app = express();
const useragent = require("express-useragent");
const logs = require("./models/logging.model");

app.use(logger(myLoggerService));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);
app.use(useragent.express());

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

function myLoggerService(tokens, req, res) {
  var source = req.headers["user-agent"];
   var ua = useragent.parse(source);
  
  let temp = {
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    contentLength: tokens.res(req, res, "content-length"),
    responseTime: [tokens["response-time"](req, res), "ms"].join(" "),
    requestDate: tokens.date(req, res),
    referrer: tokens.referrer(req, res),
    userAgent: ua,
  };
console.log(temp)
  logs.create(temp);
  return temp;
}
