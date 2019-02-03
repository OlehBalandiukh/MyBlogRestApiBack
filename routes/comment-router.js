let router = require('express').Router();
let CommentController = require('../controllers/comment-controller');

router.route('/:id')
    //get comment by id
    .get(CommentController.findById)
    //update comment
    .put(CommentController.findByIdAndUpdate)
    //delete comment
    .delete(CommentController.findByIdAndRemove);

router.route('/')
    //get all comments
    .get(CommentController.find)
    //create comment
    .post(CommentController.create);

module.exports = router;