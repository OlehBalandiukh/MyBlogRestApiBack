let router = require('express').Router();
let PostRouter = require('./post-router');
let CommentRouter = require('./comment-router');

router.use('/api/posts', PostRouter);
router.use('/api/comments', CommentRouter);

module.exports = router;