const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

const isValidId = (req, res, next) => {
    if (!isNaN(req.params.id)) return next();

    next(new Error('Invalid ID'));
};

const validContent = note => {
    if (typeof note.content === 'string' && note.content.trim() !== '')
    return validContent;
};

// getAll
router.get('/', (req, res) => {
    queries.getAll().then(notes => {
        res.render('index', { notes });
    });
});

// getOne
router.get('/:id', isValidId, (req, res) => {
    const { id } = req.params;
    queries.getOne(id).then(note => {
      console.log(note);
        if (note) {
            res.render('show', { note });
        } else {
            res.status(404);
            next(new Error('Note not found'));
        }
    });
});

// create
router.get('new', function(req, res, next) {
  res.render('new');
});

router.post('/new', (req, res, next) => {
    if (validContent(req.body)) {
        queries.create(req.body).then(note => {
            res.redirect('show', { note });
        });
    } else {
        res.status(400);
        next(new Error('Invalid note'));
    }
});

// update/edit
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    queries.getOne(id).then(note => {
    res.render('edit', { note });
    });
});

router.patch('/edit/:id', (req, res, next) => {
    // if (validContent(req.body)) {
    //     queries.update(req.params.id, req.body).then(note => {
    //         // res.redirect('/:id', { note });
    //     });
    // } else {
    //     res.status(400);
    //     next(new Error('Invalid note'));
    // }
});

// delete
router.delete('/delete', isValidId, (req, res) => {
  console.log('delete action: ', req.params);
    queries.delete(req.params.id).then(() => {
        if (note) {
            
        } else {
            res.status(404);
            next(new Error('Note not found'));
        }
    });
    res.redirect('/');
});

module.exports = router;