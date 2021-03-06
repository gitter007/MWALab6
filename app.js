/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 5 / Exercise 
************************************************/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const expressSession = require('express-session');
const csrf = require('csurf');
const ejs = require('ejs');
const fs=require('fs');
const validator = require('express-validator');


var index = require('./routes/index');
var newsletter = require('./routes/newsletter');
var thankyou = require('./routes/thankyou');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//express-validator
app.use(validator());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(expressSession({
  secret: 'test testv',
  resave: false,
  saveUninitialized: true
}))
app.use(cookieParser('somerandomestring'));
app.use(csrf());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/newsletter', newsletter);
app.use('/thankyou', thankyou);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(9000, () => {
  console.log('Server started at port 9000');
});