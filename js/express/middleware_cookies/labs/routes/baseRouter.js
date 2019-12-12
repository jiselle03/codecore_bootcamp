const express = require('express');
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7
router.get('/', (req, res) => {
    res.cookie('myCookie', '', {
        maxAge: COOKIE_MAX_AGE
    });

    console.log('res.locals: ', res.locals);
    res.render('home');
});

router.get('/select_language', (req, res) => {
    res.render('select_language');
});

router.post('/select_language', (req, res) => {
    const { name, language } = req.body;

    res.cookie('name', name, { maxAge: COOKIE_MAX_AGE });
    res.cookie('language', language, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
});

router.get('/todo_list', (req, res) => {
    res.render('todo_list');
});

router.get('/todo_new', (req, res) => {
    res.render('todo_new');
});

router.post('/todo_new', (req, res) => {
    let { title, details } = req.body;
    let obj = {};

    obj = { title: title, details: details };
    let arr = res.locals.reminder;
    arr.push(obj);

    res.cookie('reminder', JSON.stringify(arr), { maxAge: COOKIE_MAX_AGE });

    res.redirect('/todo_new');
});

router.get('/sign_in', (req, res) => {
    res.render('sign_in');
});

router.post('/sign_in', (req, res) => {
    const { username } = req.body;

    res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
    res.redirect('/');
});

router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})

module.exports = router;