var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var db1 = require('./database/db1');

var indexRouter = require('./routes/index');
var dashRouter = require('./routes/dashboard');

var app = express();

// sessione
app.use(
    session({
        secret: 'secret',
		name: '',
		password: ''
    })
);

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
