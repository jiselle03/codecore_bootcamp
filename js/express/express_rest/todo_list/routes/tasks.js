const router = require('express').Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
   queries.getAll().then(tasks => {
    res.render('tasks', { tasks });
   });
})

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', (req, res) => {
    if (req.cookies.username) {
        queries.new({
            username: req.cookies.username,
            name: req.body.name
        }).then(task => {
            res.redirect('/tasks');
        })
    } else {
        res.status(401).send('You must log in to create a task.')
    };
});

module.exports = router;