let router = require('express').Router();
let PostController = require('../controllers/post-controller');

router.route('/:id')
    //get comment by id
    .get(PostController.findById)
    //update comment
    .put(PostController.findByIdAndUpdate)
    //delete comment
    .delete(PostController.findByIdAndRemove);

router.route('/')
    //get all comments
    .get(PostController.find)
    //create comment
    .post(PostController.create);

module.exports = router;