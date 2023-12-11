var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var birthdayGreetingRouter = require("./routes/birthday_greeting_kata_router");

var app = express();
const Member = require("./models/mongodb");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/birthday_greeting", birthdayGreetingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";

  res.status(errorStatus);
  res.render("error", {
    title: "Error",
    message: errorMessage,
    error: {
      status: errorStatus,
      stack: err.stack,
    },
  });
});

module.exports = app;
