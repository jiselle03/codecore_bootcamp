const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const app = express();
const posts = require('./api/posts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    // Modifies the request object
    // Changes it from a POST request to whatever the value for the _method was within 
    // the form that was just submitted
    const method = req.body._method
    return method;
    }
  })
);

app.use('/api/v1/posts', posts); // Specify the router URL

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err: {}
  });
});

module.exports = app;
