const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const DOMAIN = 'localhost';

app.set('view engine', 'ejs');
app.set('views', 'views');

// Static Assets use 'path.join' to combine string arguments into directory paths
// For example: 
    // path.join('/', 'users', 'jiselle'); // '/users/jiselle'

// '__dirname' is a global variable available anywhere in any application that is run by 
// Node that returns the full directory path beginning from root (i.e. '/') to the location 
// of the file where '__dirname' is used.
// console.log('__dirname: ', __dirname);
// console.log(path.join(__dirname, 'public'));

// The static assets middleware will take all the files and directories at a specified 
// path and serve them publicly with their own URL.
app.use(express.static(path.join(__dirname, 'public')));
// The above line connects our 'public' directory to express so that it can serve
// the browser those images, css files, browser-side (client-side) JavaScript files, etc.

app.use(logger('dev'));

// BODY PARSER / URL ENCODED
// This middleware will decode the data that was submitted from the forms using "POST"
// When the 'extended' option is set to 'true', it will allow form data to take the shape of arrays
app.use(express.urlencoded({ extended: true }));
// It will modify the 'request' object given to routes by adding a property to it named 'body'
// 'req.body' will be an object containing the data from our forms

// COOKIE PARSER
// Modifies the request and response objects that are given to all of the routes.
app.use(cookieParser());
// It adds a property to the request object named 'cookies' which is an object itself of key-value pairs.
// It adds a method to response object called cookie() that will be used to set cookies.

// Custom Middleware
app.use((req, res, next) => {
    console.log('cookies: ', req.cookies);
    // Read cookies from the request using 'req.cookies'
    // They are represented by an object whose properties are cookie names and values associated with
    // the properties are the corresponding cookie values.
    const username = req.cookies.username;
    
    res.locals.signInUser = username || '';
    next();
});

const baseRouter = require('./routes/baseRouter');

app.use('/', baseRouter);

app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on ${DOMAIN}: ${PORT}.`);
});