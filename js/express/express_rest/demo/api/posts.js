// api/posts route

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

const isValidId = (req, res, next) => {
    if (!isNaN(req.params.id)) return next();

    next(new Error('Invalid ID'));
};

const validPost = post => {
    const hasTitle = typeof post.title === 'string' && post.title.trim() !== '';
    const hasImageUrl = typeof post.imageUrl === 'string' && post.imageUrl.trim() !== '';
    return hasTitle && hasImageUrl;
};

router.get('/', (req, res) => {
    queries.getAll().then(posts => {
        res.json(posts);
    });   
});

router.get('/:id', isValidId, (req, res) => {
    const { id } = req.params;
    queries.getOne(id).then(post => {
        if (post) {
            res.json(post);
        } else {
            res.status(404);
            next(new Error('Record not found'));
        }
    });
});

router.post('/', (req, res, next) => {
    if (validPost(req.body)) {
        queries.create(req.body).then(posts => {
            res.json(posts[0]);
        });
    } else {
        res.status(400);
        next(new Error('Invalid post'));
    }
});

router.put('/', (req, res, next) => {
    if (validPost(req.body)) {
        queries.update(req.params.id, req.body).then(() => {
            res.json({
                message: 'Successfully updated post'
            });
        });
    } else {
        res.status(400);
        next(new Error('Invalid post'));
    }
});

module.exports = router;