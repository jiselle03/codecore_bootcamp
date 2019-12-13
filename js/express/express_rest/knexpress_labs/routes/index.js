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
router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add', (req, res, next) => {
    if (validContent(req.body)) {
        queries.create(req.body).then(notes => {
            res.render('/add');
        });
    } else {
        res.status(400);
        next(new Error('Invalid note'));
    }
    res.redirect('/notes')
});

// update/edit
router.get('/edit', (req, res, next) => {
    res.render('edit')
});

router.patch('/edit/:id', (req, res, next) => {
    if (validContent(req.body)) {
        queries.update(req.params.id, req.body).then(() => {
            res.json({
                message: 'Successfully updated note'
            });
        });
    } else {
        res.status(400);
        next(new Error('Invalid note'));
    }
    res.redirect('/');
});

// delete
router.delete('/delete', isValidId, (req, res) => {
  console.log('delete action: ', req.params);
    // queries.delete(req.params.id).then(() => {
    //     if (note) {
    //         res.locals.deleteId = note.id;

    //     } else {
    //         res.status(404);
    //         next(new Error('Note not found'));
    //     }
    // });
    res.redirect('/');
});

module.exports = router;