//===DEPENDENCIES===//
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('./routes/cors');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');
//Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const questionRouter = require('./routes/questions');
const feedbackRouter = require('./routes/feedback');
//=================//


//===CONNECT TO MONGODB===//
mongoose.connect(config.mongoUrl)
.then((db) => {
  console.log("Connection to MongoDB established.");
}, (err) => {
  console.log("Error connecting to MongoDB: ", err);
});
//========================//

var app = express();
app.use(cors.corsWithOptions);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//===ROUTING===//
//Secure traffic only
app.all('*', (req, res, next) => {
  if (req.secure) return next();
  else {
    res.redirect(307, `https://${req.hostname}:${app.get('securePort')}${req.url}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionRouter);
app.use('/feedback', feedbackRouter);
//=============//

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
