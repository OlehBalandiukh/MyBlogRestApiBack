let SiteRouter = require('express').Router();

SiteRouter.get('/', (req, res, next)=>{
    res.end('/');
});

SiteRouter.get('/posts', (req, res, next)=>{
    res.end('/posts');
});

SiteRouter.get('/comments', (req, res, next)=>{
    res.end('/comments');
});

SiteRouter.use((req, res, next)=>{
    req.status(404).end("Page not found!");
    console.log("404");
});

SiteRouter.use((err, req, res, next)=>{
    res.status(500).json(err);
    console.log("500");
})

module.exports = SiteRouter;