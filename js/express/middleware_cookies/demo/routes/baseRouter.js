const express = require('express');
const router = express.Router();

// Create a route for the root '/' path
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7 // a week in milliseconds
router.get('/', (req, res) => {
    res.cookie('myCookie', '', {
        maxAge: COOKIE_MAX_AGE
    });

    res.render('welcome');
});

// Sign In page route
router.get('/sign_in', (req, res) => {
    res.render('sign_in');
});

// Sign In POST route
router.post('/sign_in', (req, res) => {
    // render a view for sign_in and perform sign_in functionality
    const { username } = req.body;

    res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
});

// Sign Out route
router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})

router.get('/hello_world', (request, response) => {
    response.render('hello_world')
});

router.get('/survey', (request, response) => {
    response.render('survey')
});

router.get('/submit', (request, response) => {
    response.render('submit', {
        query: request.query,
        subHeading: 'Thank you'
    });
});

module.exports = router;