var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db1 = require('./database/db1');

var indexRouter = require('./routes/index');
var dashRouter = require('./routes/dashboard');

var app = express();

var email = "eggsolution1@gmail.com";
var password = "admin";

var query = eval("SELECT * FROM user WHERE email='" + email + "' AND password='" + password + "';");

db1.query("SELECT * FROM user;", function(err, result, fields){
  console.log(result);
  if(err){
    console.log("ciaoooooooo "+err);
  } else {
    console.log(result + "2");
  }
});

db1.query(query, function(err, result, fields){
  console.log(result);
  if(err){
    console.log("ciaoooooooo "+err);
    //res.render('login', {errore: true});
  } else {
    console.log(result + "2");
    //res.render('dashboard', {title: "Dashboard"});
  }
});


//parse requests
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', dashRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
