// Import express
const express = require('express');

// Import http logger middleware to log requests to the console
const logger = require('morgan');

// Will parse cookies from the http request
const cookieParser = require('cookie-parser');

const methodOverride = require('method-override');

// Initialize Express app
const app = express();

// Import routes
const baseRouter = require('./routes/index');
const tasksRouter = require('./routes/tasks')

// Set up our view engine to ejs
app.set('view engine', 'ejs');

// USE MIDDLEWARE:
app.use(logger());
app.use(express.urlencoded({extended: false})); // parse HTML forms
app.use(cookieParser());
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use((req, res, next) => {
    res.locals.username = req.cookies.username || '';
    next();
});

// Route Middleware
app.use('/', baseRouter);
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 4000;
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`);
});