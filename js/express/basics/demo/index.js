const express = require('express');
const logger = require('morgan');

// Invoking express will return an express 'app' object
const app = express();

const PORT = 3000;
const DOMAIN = 'localhost';

//app.set accepts 2 arguments:
    // 1) a configureation key: this is a string of the configuration that you want to set
    // 2) the value that you want the config to be
app.set('view engine', 'ejs'); // telling express to use ejs as the view engine

// We need to set the views directory
app.set('views', 'views'); // tell express to look for views inside of a directory called views

// Initialize morgan
app.use(logger('dev'));

// app.get receives at least 2 arguments:
    // 1) PATH of the resource
    // 2) Callback with 2 parameters:
            // a) request: represents an HTTP Request 
            // b) response: represents an HTTP Response

// Route to handle GET '/hello_world'
app.get('/hello_world', (request, response) => {
    // response.send('<h1>Hello World!</h1>');

    //response.render() is used to render out a view
    // It accepts 3 arguments:
        // 1) the path to the view starting from the configured directory, in case it's '/views'
        // 2) locals object
        // 3) callback (usually not used)
    response.render('hello_world')
});

// Make a route to handle GET '/survey'
app.get('/survey', (request, response) => {
    // response.send('<h4>Survey Page</h4>')
    response.render('survey')
});

// Handler for GET '/submit'
app.get('/submit', (request, response) => {
    response.render('submit', {
        query: request.query,
        subHeading: 'Thank you!'
    });
});

// app.listen is used to start your express server.
// It tells express to start listening for requests at a given url.
// It accepts 3 arguments:
    // 1) PORT
    // 2) DOMAIN
    // 3) Callback
app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on ${DOMAIN}: ${PORT}.`);
});