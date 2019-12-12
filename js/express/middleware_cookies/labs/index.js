const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const DOMAIN = 'localhost';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log('cookies: ', req.cookies);
    const name = req.cookies.name;
    const language = req.cookies.language;  
    res.locals.getName = name || '';
    res.locals.getLanguage = language || 'English';

    const reminder = req.cookies.reminder;

    if (typeof reminder !== 'undefined') {
        res.locals.reminder = JSON.parse(reminder);
    } else {
        res.locals.reminder = [];
    }
    
    const username = req.cookies.username;
    res.locals.signInUser = username || '';

    next();
});

const baseRouter = require('./routes/baseRouter');

app.use('/', baseRouter);

app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on ${DOMAIN}: ${PORT}.`);
});